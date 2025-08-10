from fastapi import  APIRouter
from youtube.yt_utils import qa_from_yt,transcribe_yt_to_str

yt_router = APIRouter()

@yt_router.post('/create/youtube')
async def get_qa_from_yt(url:str):
    transcript=transcribe_yt_to_str(url)
    object=qa_from_yt(transcript)
    response=object.QAList
    #TODO: Add to DB function
    return response
