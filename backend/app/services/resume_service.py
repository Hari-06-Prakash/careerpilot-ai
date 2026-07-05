from sqlalchemy.orm import Session
from fastapi import HTTPException
import os

from app.models.resume import Resume
from app.repositories.resume_repository import ResumeRepository


class ResumeService:

    def __init__(self):
        self.repository = ResumeRepository()

    def create_resume(
        self,
        db: Session,
        filename: str,
        filepath: str,
        user_id: int,
    ):
        resume = Resume(
            filename=filename,
            filepath=filepath,
            user_id=user_id,
        )

        return self.repository.create_resume(db, resume)

    def get_user_resumes(
        self,
        db: Session,
        user_id: int,
    ):
        return self.repository.get_user_resumes(db, user_id)

    def get_resume(
        self,
        db: Session,
        resume_id: int,
    ):
        resume = self.repository.get_resume_by_id(
            db,
            resume_id,
        )

        if not resume:
            raise HTTPException(
                status_code=404,
                detail="Resume not found",
            )

        return resume

    def delete_resume(
        self,
        db: Session,
        resume_id: int,
    ):
        resume = self.repository.delete_resume(
            db,
            resume_id,
        )

        if not resume:
            raise HTTPException(
                status_code=404,
                detail="Resume not found",
            )

        if os.path.exists(resume.filepath):
            os.remove(resume.filepath)

        return {
            "message": "Resume deleted successfully"
        }


resume_service = ResumeService()