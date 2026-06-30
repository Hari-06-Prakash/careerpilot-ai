from fastapi import FastAPI
from sqlalchemy import text
from fastapi.middleware.cors import CORSMiddleware
from app.database.connection import engine
from app.database.base import Base
from app.api.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CareerPilot AI",
    version="1.0.0",
    description="An Agentic AI Operating System for Career Development",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "CareerPilot AI Backend Running 🚀"
    }


@app.get("/health/db")
def database_health():

    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "database": "Connected Successfully ✅"
    }