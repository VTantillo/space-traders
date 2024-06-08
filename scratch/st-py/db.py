from psycopg.rows import class_row
from psycopg.types.json import Jsonb
from psycopg_pool import ConnectionPool
from pydantic import BaseModel, PostgresDsn

from domain import System, Waypoint


class NearestSystems(BaseModel):
    symbol: str
    system_type: str
    x: int
    y: int
    distance: float
    num_waypoints: int


class SpaceTradersDb:
    def __init__(self, conn_string: PostgresDsn) -> None:
        self.db = ConnectionPool(conn_string.unicode_string())

    def get_nearest_systems(self, system_symbol: str) -> list[NearestSystems]:
        with self.db.connection() as conn:
            with conn.cursor(row_factory=class_row(NearestSystems)) as cur:
                results = cur.execute(
                    """
                    with
                    current_system_coords as (
                        select
                            symbol,
                            x,
                            y
                        from "system"
                        where symbol = %(system_symbol)s
                    )
                    select
                        s.symbol,
                        s.type as system_type,
                        s.x,
                        s.y,
                        |/( ( (s.x - cs.x) ^ 2 ) + ((s.y - cs.y) ^2) ) as distance,
                        jsonb_array_length(s.waypoints) as num_waypoints
                    from "system" s, current_system_coords cs
                    order by distance;
                    """,
                    {"system_symbol": system_symbol},
                ).fetchall()
                return results

    def get_scrape_systems(self, system_symbol: str) -> list[NearestSystems]:
        with self.db.connection() as conn:
            with conn.cursor(row_factory=class_row(NearestSystems)) as cur:
                results = cur.execute(
                    """
                    with
                    current_system_coords as (
                        select
                            symbol,
                            x,
                            y
                        from "system"
                        where symbol = %(system_symbol)s
                    )
                    select
                        s.symbol,
                        s.type as system_type,
                        s.x,
                        s.y,
                        |/( ( (s.x - cs.x) ^ 2 ) + ((s.y - cs.y) ^2) ) as distance,
                        jsonb_array_length(s.waypoints) as num_waypoints
                    from "system" s, current_system_coords cs
                    where jsonb_array_length(s.waypoints) > 0
                        and |/( ( (s.x - cs.x) ^ 2 ) + ((s.y - cs.y) ^2) ) > 16408
                    order by distance;
                    """,
                    {"system_symbol": system_symbol},
                ).fetchall()
                return results

    def insert_systems(self, systems: list[System]):
        with self.db.connection() as conn:
            with conn.cursor() as cur:
                with conn.transaction():
                    for s in systems:
                        _ = cur.execute(
                            """
                            insert into system (
                                symbol,
                                type,
                                sector,
                                x,
                                y,
                                waypoints,
                                factions
                            ) values (
                                %(symbol)s,
                                %(type)s,
                                %(sector)s,
                                %(x)s,
                                %(y)s,
                                %(waypoints)s,
                                %(factions)s
                            );
                            """,
                            {
                                "symbol": s.symbol,
                                "type": s.system_type,
                                "sector": s.sector_symbol,
                                "x": s.x,
                                "y": s.y,
                                "waypoints": Jsonb(
                                    [w.model_dump() for w in s.waypoints]
                                ),
                                "factions": Jsonb([f.model_dump() for f in s.factions]),
                            },
                        )

    def insert_waypoints(self, waypoints: list[Waypoint]):
        with self.db.connection() as conn:
            with conn.cursor() as cur:
                with conn.transaction():
                    for w in waypoints:
                        _ = cur.execute(
                            """
                            insert into waypoint (
                                symbol,
                                system_symbol,
                                type,
                                x,
                                y,
                                orbitals,
                                traits,
                                modifiers,
                                chart,
                                faction,
                                is_under_construction
                            ) values (
                                %(symbol)s,
                                %(system_symbol)s,
                                %(type)s,
                                %(x)s,
                                %(y)s,
                                %(orbitals)s,
                                %(traits)s,
                                %(modifiers)s,
                                %(chart)s,
                                %(faction)s,
                                %(is_under_construction)s
                            );
                            """,
                            {
                                "symbol": w.symbol,
                                "system_symbol": w.system_symbol,
                                "type": w.waypoint_type,
                                "x": w.x,
                                "y": w.y,
                                "orbitals": Jsonb([o.model_dump() for o in w.orbitals]),
                                "traits": Jsonb(
                                    [t.model_dump(by_alias=True) for t in w.traits]
                                ),
                                "modifiers": Jsonb(w.modifiers),
                                "chart": Jsonb(
                                    w.chart.model_dump(by_alias=True)
                                    if w.chart is not None
                                    else None
                                ),
                                "faction": Jsonb(
                                    w.faction.model_dump()
                                    if w.faction is not None
                                    else None
                                ),
                                "is_under_construction": w.is_under_construction,
                            },
                        )

    def delete_systems(self):
        with self.db.connection() as conn:
            with conn.cursor() as cur:
                with conn.transaction():
                    _ = cur.execute("""delete from system;""")

    def delete_waypoints(self):
        with self.db.connection() as conn:
            with conn.cursor() as cur:
                with conn.transaction():
                    _ = cur.execute("""delete from waypoint;""")
