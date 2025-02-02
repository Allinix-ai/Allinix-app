import pinecone


def init_pinecone() -> None:
    if settings.pinecone_api_key and settings.pinecone_environment:
        pinecone.init(
            environment=settings.pinecone_environment,
        )
