import math
import time
from datetime import datetime

import httpx
from loguru import logger
from tenacity import (
    retry,
    stop_after_attempt,
    wait_fixed,
)

from config import get_settings
from constants import api_token, base_url
from db import SpaceTradersDb
from domain import SystemsRes, Waypoint, WaypointsRes

headers = {"Authorization": f"Bearer {api_token}"}

limit = 20
home_system = "X1-SD16"


def reset_db(db: SpaceTradersDb):
    logger.info("resetting db")
    db.delete_waypoints()
    db.delete_systems()
    logger.info("finished resetting db")


@retry(
    stop=stop_after_attempt(5),
    wait=wait_fixed(5),
)
def get_waypoints(system: str, page: int) -> WaypointsRes:
    with httpx.Client(base_url=base_url, headers=headers) as client:
        req = client.get(
            f"/systems/{system}/waypoints", params={"page": page, "limit": limit}
        )
        return WaypointsRes.model_validate(req.json())


@retry(
    stop=stop_after_attempt(5),
    wait=wait_fixed(5),
)
def get_systems(page: int) -> SystemsRes:
    with httpx.Client(base_url=base_url, headers=headers) as client:
        req = client.get("/systems", params={"page": page, "limit": limit})

        return SystemsRes.model_validate(req.json())


def scrape_systems(db: SpaceTradersDb):
    logger.info("Starting to scrape systems")
    start = datetime.now()
    page = 1

    while True:
        res = get_systems(page)

        if len(res.data) == 0:
            logger.info("No systems found on page {} ", page)
            break

        db.insert_systems(res.data)
        logger.info(
            "Inserted systems from {} of {} pages", page, math.ceil(res.meta.total / 20)
        )
        page = page + 1
        time.sleep(0.75)

    end = datetime.now()
    elapsed = end - start
    logger.info("Finished scraping systems in {} seconds", elapsed.total_seconds())


def scrape_waypoints(db: SpaceTradersDb):
    start = datetime.now()
    total_waypoints = 0
    systems_scraped = 0

    calls = 0

    logger.info("Starting to scrape waypoints")

    systems = db.get_scrape_systems(home_system)
    num_systems = len(systems)

    logger.info("Scraping waypoints for {} systems", num_systems)

    for system in systems:
        logger.info(
            "System: {}, Distance: {}, Waypoints: {}, Pages: {}",
            system.symbol,
            round(system.distance, 2),
            system.num_waypoints,
            math.ceil(system.num_waypoints / 20),
        )

        waypoints: list[Waypoint] = []
        page = 1

        while True:
            res = get_waypoints(system.symbol, page)

            if len(res.data) == 0:
                percentage = round((systems_scraped / num_systems) * 100, 2)
                cur = datetime.now()
                runtime = cur - start
                logger.info(
                    "STATUS: {} of {} ({}%) systems scraped, {} seconds elapsed",
                    calls,
                    num_systems,
                    percentage,
                    round(runtime.total_seconds(), 2),
                )
                break

            waypoints.extend(res.data)
            page = page + 1
            calls = calls + 1
            time.sleep(0.75)

        db.insert_waypoints(waypoints)
        logger.info("Inserted {} waypoints", len(waypoints))
        total_waypoints = total_waypoints + len(waypoints)
        systems_scraped = systems_scraped + 1
        # logger.info("Scraped {} of {} systems", systems_scraped, len(systems))

    end = datetime.now()
    elapsed = end - start
    logger.info(
        "Scraped {} waypoints after {} seconds, {} api calls",
        total_waypoints,
        elapsed.total_seconds(),
        calls,
    )


def full_reset():
    logger.info("Starting full reset")

    settings = get_settings()
    db = SpaceTradersDb(settings.db_url)

    start = datetime.now()
    reset_db(db)

    scrape_systems(db)
    scrape_waypoints(db)

    end = datetime.now()
    elapsed = end - start
    logger.info("Finished full reset after {} seconds", elapsed.total_seconds())


def main():
    settings = get_settings()
    db = SpaceTradersDb(settings.db_url)
    scrape_waypoints(db)


if __name__ == "__main__":
    # full_reset()
    main()
