from psycopg.types.json import Jsonb
from psycopg_pool import ConnectionPool
from pydantic import PostgresDsn

from domain import System, Waypoint


class SpaceTradersDb:
    def __init__(self, conn_string: PostgresDsn) -> None:
        self.db = ConnectionPool(conn_string.unicode_string())

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
