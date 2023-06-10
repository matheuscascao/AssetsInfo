from fastapi import FastAPI
from src.adapters.web_server.fastapi.router import api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ASSET API", description="API for assets", version="1.0.0")
app.include_router(api_router)

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:5000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        port=8000,
        log_level="info",
        reload=True,
    )