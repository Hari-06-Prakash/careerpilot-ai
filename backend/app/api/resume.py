import os
import shutil

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.services.resume_service import resume_service

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_DIR = "uploads/resumes"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
def upload_resume(
    user_id: int,
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF resumes are allowed."
        )

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    resume = resume_service.create_resume(
        db=db,
        filename=file.filename,
        filepath=file_path,
        user_id=user_id,
    )

    return {
        "message": "Resume uploaded successfully ✅",
        "resume": {
            "id": resume.id,
            "filename": resume.filename,
            "filepath": resume.filepath,
        },
    }


@router.get("/")
def get_user_resumes(
    user_id: int,
    db: Session = Depends(get_db),
):
    resumes = resume_service.get_user_resumes(
        db=db,
        user_id=user_id,
    )

    return resumes

@router.delete("/{resume_id}")
def delete_resume(
    resume_id: int,
    db: Session = Depends(get_db),
):
    return resume_service.delete_resume(
        db=db,
        resume_id=resume_id
    )