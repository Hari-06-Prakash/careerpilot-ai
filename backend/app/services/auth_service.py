from sqlalchemy.orm import Session

from app.repositories.user_repository import (
    get_user_by_email,
    create_user,
)

from app.core.security import (
    hash_password,
    verify_password,
)

from app.core.jwt import create_access_token


def register_user(
    db: Session,
    name: str,
    email: str,
    password: str,
):
    existing_user = get_user_by_email(db, email)

    if existing_user:
        raise ValueError("Email already registered.")

    hashed_password = hash_password(password)

    return create_user(
        db=db,
        name=name,
        email=email,
        hashed_password=hashed_password,
    )


def login_user(
    db: Session,
    email: str,
    password: str,
):
    user = get_user_by_email(db, email)

    if not user:
        raise ValueError("Invalid email or password.")

    if not verify_password(password, user.password):
        raise ValueError("Invalid email or password.")

    token = create_access_token(
        {
            "sub": user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }