import abc
from typing import List

class CryptoInterface(metaclass = abc.ABCMeta):

    @abc.abstractclassmethod
    def return_crypto_info(self, crypto_name: str) -> dict:
        ...
    
    @abc.abstractclassmethod
    def return_cryptos_list(self) -> List:
        ...