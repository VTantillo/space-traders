import polars as pl
from pydantic import BaseModel, Field


class Orbital(BaseModel):
    symbol: str


class Waypoint(BaseModel):
    symbol: str
    type: str
    x: int
    y: int
    orbitals: list[Orbital]
    orbits: str | None = None


class Faction(BaseModel):
    symbol: str


class System(BaseModel):
    symbol: str
    sector_symbol: str = Field(alias="sectorSymbol")
    system_type: str = Field(alias="type")
    x: int
    y: int
    waypoints: list[Waypoint]
    factions: list[Faction]


def main():
    print("this is the main function")
    df = pl.DataFrame()
    print(df)


if __name__ == "__main__":
    main()
