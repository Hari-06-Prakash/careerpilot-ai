from passlib.context import CryptContext

# Configure bcrypt hashing
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password: str) -> str:
    """
    Hash a plain text password.

    Args:
        password: User's plain password.

    Returns:
        Hashed password.
    """
    return pwd_context.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str
) -> bool:
    """
    Verify a password against its hash.

    Args:
        plain_password: Password entered by user.
        hashed_password: Password stored in database.

    Returns:
        True if password matches.
    """
    return pwd_context.verify(
        plain_password,
        hashed_password
    )