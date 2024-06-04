from typing import Any  # pyright: ignore[reportAny]

from pydantic import BaseModel, Field


class Symbol(BaseModel):
    symbol: str


class Meta(BaseModel):
    total: int
    page: int
    limit: int


class SystemWaypoint(BaseModel):
    symbol: str
    waypoint_type: str = Field(..., alias="type")
    x: int
    y: int
    orbitals: list[Symbol]
    orbits: str | None = None


class System(BaseModel):
    symbol: str
    sector_symbol: str = Field(..., alias="sectorSymbol")
    system_type: str = Field(..., alias="type")
    x: int
    y: int
    waypoints: list[SystemWaypoint]
    factions: list[Symbol]


class SystemsRes(BaseModel):
    data: list[System]
    meta: Meta


class Trait(BaseModel):
    symbol: str
    name: str
    description: str


class Chart(BaseModel):
    submitted_by: str = Field(alias="submittedBy")
    submitted_on: str = Field(alias="submittedOn")
    waypoint_symbol: str | None = Field(default=None, alias="waypointSymbol")


class Waypoint(BaseModel):
    system_symbol: str = Field(alias="systemSymbol")
    symbol: str
    waypoint_type: str = Field(alias="type")
    x: int
    y: int
    orbitals: list[Symbol] = Field(default_factory=lambda: [])
    traits: list[Trait] = Field(default_factory=lambda: [])
    modifiers: list[Any]
    chart: Chart | None = None
    faction: Symbol | None = None
    is_under_construction: bool = Field(alias="isUnderConstruction")


class WaypointsRes(BaseModel):
    data: list[Waypoint]
    meta: Meta
