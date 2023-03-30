from src.entities.Asset import News, Asset
from src.use_cases.proccess_get_asset_info.dto_get_asset_info import StockInfoDtoInput, StockInfoDtoOutput
from src.adapters.News.news_fetcher_interface import NewsFetcherInterface
from src.adapters.Crypto.crypto_interface import CryptoInterface

class ProccessCreateAsset():
    def __init__(
        self,
        news_fetcher: NewsFetcherInterface,
        crypto_fetcher: CryptoInterface
    ) -> None:
        self.news_fetcher = news_fetcher
        self.crypto_fetcher = crypto_fetcher

    def execute(self, value: StockInfoDtoInput) -> StockInfoDtoOutput:
        output = StockInfoDtoOutput()

        news_list = self.news_fetcher.create_news_list(asset=value)
        crypto_financial_info = self.crypto_fetcher.return_crypto_info(crypto_name = value)
        
        output.identifier = value

        try:
            output.asset_name = crypto_financial_info["asset_name"]
            output.daily_price_variation = crypto_financial_info["daily_price_variation"]
            output.weekly_price_variation = crypto_financial_info["weekly_price_variation"]
            output.market_cap = crypto_financial_info["market_cap"]
            output.current_price = crypto_financial_info["current_price"]
            output.sparkline = crypto_financial_info["sparkline_7d"]
        except:
            print("Error while fetching crypto info")

        if news_list:
            output.news_list = news_list
        else:
            output.news_list = []
        
        return output
    
