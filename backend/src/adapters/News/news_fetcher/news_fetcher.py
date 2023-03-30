from src.core.configs import settings
from src.adapters.News.news_fetcher_interface import NewsFetcherInterface
from src.entities.Asset import News 
from typing import List, Dict
import requests

class NewsFetcher(NewsFetcherInterface):

    def return_news_by_asset(self, asset: str) -> List:
        _raw_news: List = []
        try:
            url = f"{settings.BASE_ENDPOINT_NEWSFETCHER}/top-headlines"
            params = {
                "q": asset,
                "apiKey": settings.TOKEN_NEWSFETCHER
            }
            r = requests.get(url, params=params)
            
            _raw_news = r.json()["articles"]
        except Exception as e:
            raise Exception (e)
        finally:
            return _raw_news
        
    def create_news_list(self, asset) -> List[News]:
        _raw_news = self.return_news_by_asset(asset)
        _news: List[News] = []
        
        for item in _raw_news:
            itemObject = News()

            itemObject.title = item["title"]
            itemObject.description = item["description"]
            itemObject.source = item["source"]["name"]
            itemObject.url_to_image = item["urlToImage"]
            itemObject.url = item["url"]

            _news.append(itemObject.get_news())

        return _news
