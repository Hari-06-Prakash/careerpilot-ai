from fastapi import FastAPI

app = FastAPI(
    title="CareerPilot AI",
    description="An Agentic AI Operating System for Career Development",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "CareerPilot AI Backend Running 🚀",
        "status": "Healthy"
    }