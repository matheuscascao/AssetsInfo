import requests
from src.core.configs import settings
from src.adapters.Crypto.crypto_interface import CryptoInterface
from typing import List

class CoingeckoFetcher(CryptoInterface):
    
    def return_crypto_info(self, crypto_name: str) -> dict:
        crypto_info = {"asset_name": "",
                       "daily_price_variation": "",
                       "weekly_price_variation": "",
                       "market_cap": "",
                       "current_price": ""}
        try:
            url = f"{settings.BASE_ENDPOINT_CRYPTOFETCHER}coins/{crypto_name.lower()}"
            params = {
                "sparkline": "true"
            }
            
            r = requests.get(url, params=params)
            _raw_financial_data = r.json()
            
            crypto_info["asset_name"] = _raw_financial_data["name"]
            crypto_info["daily_price_variation"] = _raw_financial_data["market_data"]["price_change_percentage_24h"]
            crypto_info["weekly_price_variation"] = _raw_financial_data["market_data"]["price_change_percentage_7d"]
            crypto_info["market_cap"] = _raw_financial_data["market_data"]["market_cap"]["usd"]
            crypto_info["current_price"] = _raw_financial_data["market_data"]["current_price"]["usd"]
            crypto_info["sparkline_7d"] = _raw_financial_data["market_data"]["sparkline_7d"]["price"]

        except:
            pass

        return crypto_info
    
    def return_cryptos_list(self) -> List:
        return ["test"]
    