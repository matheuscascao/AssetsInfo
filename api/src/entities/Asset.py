from typing import Dict, List

# Classe anêmica
class News():
    title: str
    description: str
    source: str
    url: str
    url_to_image: str

    def get_news(self):
        news_object: Dict = {}
        
        news_object['title'] = self.title
        news_object['description'] = self.description
        news_object['source'] = self.source
        news_object['url_to_image'] = self.url_to_image
        news_object['url'] = self.url

        return news_object

class Asset():
    news_list: List[News] = []
    sparkline: List = []
    def __init__(
            self,
            asset: str,
            asset_name: str,
            daily_price_variation: float,
            weekly_price_variation: float,
            market_cap: float,
            current_price: float,
    ) -> None:
        self.asset = asset
        self.asset_name = asset_name
        self.daily_price_variation = daily_price_variation
        self.weekly_price_variation = weekly_price_variation
        self.market_cap = market_cap
        self.current_price = current_price

    @property
    def market_cap(self) -> float:
        #formatting and validation
        return self.market_cap
    @market_cap.setter
    def market_cap(self, value: float) -> float:
        self.market_cap = value

    @property
    def asset_name(self) -> str:
        return self.asset_name
    @asset_name.setter
    def asset_name(self, value: str):
        self.asset_name = value

    @property
    def daily_price_variation(self) -> float:
        return self.daily_price_variation
    @daily_price_variation.setter
    def daily_price_variation(self, value: float):
        self.daily_price_variation = value

    @property
    def weekly_price_variation(self) -> float:
        return self.weekly_price_variation
    @weekly_price_variation.setter
    def weekly_price_variation(self, value: float):
        self.weekly_price_variation = value

    @property
    def market_cap(self) -> float:
        return self.market_cap
    @market_cap.setter
    def market_cap(self, value: float):
        self.market_cap = value

    @property
    def current_price(self) -> float:
        return self.current_price
    @current_price.setter
    def current_price(self, value: float):
        self.current_price = value

    def get_stock(self):
        stock_object: Dict = {}
        
        stock_object['identifier'] = self.identifier
        stock_object['asset_name'] = self.asset_name
        stock_object['daily_price_variation'] = self.daily_price_variation
        stock_object['weekly_price_variation'] = self.weekly_price_variation
        stock_object['market_cap'] = self.market_cap
        stock_object['current_price'] = self.current_price
        stock_object['news_list'] = self.news_list

        return stock_object
