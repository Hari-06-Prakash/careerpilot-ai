from sqlalchemy.orm import Session

from app.models.resume import Resume


class ResumeRepository:

    def create_resume(self, db: Session, resume: Resume):
        db.add(resume)
        db.commit()
        db.refresh(resume)
        return resume

    def get_resume_by_id(self, db: Session, resume_id: int):
        return (
            db.query(Resume)
            .filter(Resume.id == resume_id)
            .first()
        )

    def get_user_resumes(self, db: Session, user_id: int):
        return (
            db.query(Resume)
            .filter(Resume.user_id == user_id)
            .all()
        )

    def delete_resume(self, db: Session, resume_id: int):
        resume = (
            db.query(Resume)
            .filter(Resume.id == resume_id)
            .first()
        )

        if resume:
            db.delete(resume)
            db.commit()

        return resume