from pydantic import BaseModel

class StocksEntities(BaseModel):
    asset: str
    