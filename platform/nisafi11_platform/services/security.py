
from cryptography.fernet import Fernet, InvalidToken

from nisafi11_platform.settings import settings
from nisafi11_platform.web.api.http_responses import forbidden


class EncryptionService:
    def __init__(self, secret: bytes):
        self.fernet = Fernet(secret)

    def encrypt(self, text: str) -> bytes:

    def decrypt(self, encoded_bytes: Union[bytes, str]) -> str:
        try:
        except InvalidToken:
            raise forbidden()


encryption_service = EncryptionService(settings.secret_signing_key.encode())
