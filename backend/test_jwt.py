from app.core.jwt import create_access_token

token = create_access_token(
    {
        "sub": "hari@example.com"
    }
)

print(token)