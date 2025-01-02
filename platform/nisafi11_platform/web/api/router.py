
from nisafi11_platform.web.api import agent, auth, metadata, models, monitoring

api_router = APIRouter()
api_router.include_router(models.router, prefix="/models", tags=["models"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(metadata.router, prefix="/metadata", tags=["metadata"])
