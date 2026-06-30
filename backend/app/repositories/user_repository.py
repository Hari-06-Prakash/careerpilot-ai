from sqlalchemy.orm import Session

from app.models.user import User


def get_user_by_email(db: Session, email: str):
    """
    Fetch a user by email.
    """
    return db.query(User).filter(User.email == email).first()


def create_user(
    db: Session,
    name: str,
    email: str,
    hashed_password: str
):
    """
    Create a new user.
    """

    user = User(
        name=name,
        email=email,
        password=hashed_password
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user