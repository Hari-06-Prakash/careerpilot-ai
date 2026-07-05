from datetime import datetime
from pydantic import BaseModel


class ResumeBase(BaseModel):
    filename: str
    filepath: str


class ResumeCreate(ResumeBase):
    user_id: int


class ResumeResponse(ResumeBase):
    id: int
    uploaded_at: datetime
    user_id: int

    class Config:
        from_attributes = True