from fastapi import APIRouter
from src.adapters.web_server.fastapi.controller import stocks_controller

api_router = APIRouter()

api_router.include_router(stocks_controller.router, prefix="/stocks", tags=["STOCKS"])
