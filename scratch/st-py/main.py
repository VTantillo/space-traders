import polars as pl
from pydantic import BaseModel


class RentComp(BaseModel):
    id: int


def main():
    print("this is the main function")
    df = pl.DataFrame()
    print(df)


if __name__ == "__main__":
    main()
