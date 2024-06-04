import json
import time

import httpx
from pydantic import BaseModel

from config import get_settings
from constants import api_token, base_url
from db import SpaceTradersDb
from domain import SystemsRes, Waypoint, WaypointsRes

headers = {"Authorization": f"Bearer {api_token}"}

limit = 20


def get_waypoints(system: str, page: int) -> WaypointsRes:
    with httpx.Client(base_url=base_url, headers=headers) as client:
        req = client.get(
            f"/systems/{system}/waypoints", params={"page": page, "limit": limit}
        )
        return WaypointsRes.model_validate(req.json())


def get_systems(page: int) -> SystemsRes:
    with httpx.Client(base_url=base_url, headers=headers) as client:
        req = client.get("/systems", params={"page": page, "limit": limit})

        return SystemsRes.model_validate(req.json())


def scrape_waypoints(system: str) -> list[Waypoint]:
    waypoints: list[Waypoint] = []
    page = 1
    while True:
        print(f"getting page {page}")
        res = get_waypoints(system, page)

        if len(res.data) == 0:
            print("No waypoints on page")
            break

        waypoints.extend(res.data)
        page = page + 1
        print(f"num waypoints {len(waypoints)}, sleeping...")
        time.sleep(1)

    return waypoints


# def scrape_systems(db: SpaceTradersDb):
#     settings = get_settings()
#     db = SpaceTradersDb(settings.db_url)
#     page = 1


def reset_db(db: SpaceTradersDb):
    db.delete_waypoints()
    db.delete_systems()


def save_to_json(name: str, data: BaseModel):
    with open(f"./out/{name}.json", "w") as file:
        json.dump(data.model_dump(exclude_none=True), file, indent=2)


def main():
    system = "X1-T70"
    settings = get_settings()
    db = SpaceTradersDb(settings.db_url)
    # reset_db(db)
    # res = get_systems(1)
    #
    # db.insert_systems(res.data)

    waypoints = scrape_waypoints(system)
    db.insert_waypoints(waypoints)


if __name__ == "__main__":
    main()
