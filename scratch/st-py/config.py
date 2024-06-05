from functools import lru_cache

from pydantic import PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict


class SpaceTradersSettings(BaseSettings):
    db_url: PostgresDsn
    api_token: str
    base_url: str

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


@lru_cache()
def get_settings() -> SpaceTradersSettings:
    return SpaceTradersSettings.model_validate({})
