import asyncio
from dotenv import load_dotenv
load_dotenv()

from db.base import engine, Base
from db.models import User, Chat, Message

async def init_models():
    async with engine.begin() as conn:
        # await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    print("Database initialized successfully")

if __name__ == "__main__":
    asyncio.run(init_models())
