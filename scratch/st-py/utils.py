import json

from pydantic import BaseModel


def save_to_json(name: str, data: BaseModel):
    with open(f"./out/{name}.json", "w") as file:
        json.dump(data.model_dump(exclude_none=True), file, indent=2)
