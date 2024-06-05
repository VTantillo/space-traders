import json

import httpx

from config import get_settings


def main():
    settings = get_settings()
    headers = {"Authorization": f"Bearer {settings.api_token}"}
    with httpx.Client(base_url=settings.base_url, headers=headers) as client:
        res = client.get("/")
        with open("./out/status.json", "w") as file:
            json.dump(res.json(), file, indent=2)


if __name__ == "__main__":
    main()
