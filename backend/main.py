from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from database import supabase
from ai_scoring import calculate_score
import uuid, os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SUPABASE_URL = os.getenv("SUPABASE_URL")

@app.post("/upload_player")
async def upload_player(
    user_id: str = Form(...),
    name: str = Form(...),
    age: int = Form(...),
    position: str = Form(...),
    location: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    goals: int = Form(...),
    assists: int = Form(...),
    matches: int = Form(...),
    file: UploadFile = File(...)
):
    file_name = f"{uuid.uuid4()}.mp4"

    supabase.storage.from_("videos").upload(file_name, file.file.read())

    video_url = f"{SUPABASE_URL}/storage/v1/object/public/videos/{file_name}"

    score = calculate_score(goals, assists, matches, 0)

    supabase.table("players").insert({
        "user_id": user_id,
        "name": name,
        "age": age,
        "position": position,
        "location": location,
        "latitude": latitude,
        "longitude": longitude,
        "goals": goals,
        "assists": assists,
        "matches": matches,
        "video_url": video_url,
        "score": score
    }).execute()

    return {"message": "uploaded"}


@app.get("/players")
def get_players():
    return supabase.table("players").select("*").order("score", desc=True).execute()


@app.post("/like/{player_id}")
def like_player(player_id: str):
    player = supabase.table("players").select("*").eq("id", player_id).execute().data[0]

    new_likes = player["likes"] + 1

    new_score = calculate_score(
        player["goals"],
        player["assists"],
        player["matches"],
        new_likes
    )

    supabase.table("players").update({
        "likes": new_likes,
        "score": new_score
    }).eq("id", player_id).execute()

    return {"likes": new_likes}
