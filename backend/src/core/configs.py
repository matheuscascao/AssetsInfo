from pydantic import BaseSettings
import os
from dotenv import load_dotenv
load_dotenv()

class Settings(BaseSettings):

    TOKEN_NEWSFETCHER: str = os.environ["TOKEN_NEWSFETCHER"]
    BASE_ENDPOINT_NEWSFETCHER: str = "https://newsapi.org/v2"

    BASE_ENDPOINT_CRYPTOFETCHER: str = "https://api.coingecko.com/api/v3/" 

settings = Settings()