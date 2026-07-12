import os
import shutil

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.services.resume_service import resume_service
from app.services.parser_service import parser_service
from app.ai.resume_analyzer import resume_analyzer

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


# ==========================================================
# NEW FEATURE : VIEW RESUME
# ==========================================================

@router.get("/view/{resume_id}")
def view_resume(
    resume_id: int,
    db: Session = Depends(get_db),
):

    resume = resume_service.get_resume(
        db=db,
        resume_id=resume_id,
    )

    if not os.path.exists(resume.filepath):
        raise HTTPException(
            status_code=404,
            detail="Resume file does not exist."
        )

    return FileResponse(
        path=resume.filepath,
        media_type="application/pdf",
    )

# ==========================================================
# PARSE RESUME (AI)
# ==========================================================

@router.post("/parse/{resume_id}")
def parse_resume(
    resume_id: int,
    db: Session = Depends(get_db),
):

    parsed_resume = parser_service.parse_resume(
        db=db,
        resume_id=resume_id,
    )

    return {
        "message": "Resume parsed successfully",
        "data": parsed_resume,
    }

@router.post("/ai-test")
def ai_test():

    sample_resume = """
    TALASILA DIVYA HARI PRAKASH

    Email: hariprakashtalasila5@gmail.com

    Phone: +91 7416316839

    Skills:
    Python
    FastAPI
    React
    SQL

    Education:
    B.Tech Computer Science

    Projects:
    CareerPilot AI
    """

    result = resume_analyzer.analyze_resume(
        sample_resume
    )

    return result