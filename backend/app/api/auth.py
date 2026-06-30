from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.auth import UserRegister, UserLogin
from app.services.auth_service import register_user, login_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    try:
        new_user = register_user(
            db=db,
            name=user.name,
            email=user.email,
            password=user.password,
        )

        return {
            "message": "User registered successfully.",
            "user": {
                "id": new_user.id,
                "name": new_user.name,
                "email": new_user.email,
            },
        }

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):
    try:
        return login_user(
            db=db,
            email=user.email,
            password=user.password,
        )

    except ValueError as e:
        raise HTTPException(status_code=401, detail=str(e))