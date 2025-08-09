from fastapi import  APIRouter
from youtube.yt_util import qa_from_yt
from transcript.transcribe_yt import transcribe_yt_to_str

yt_router = APIRouter()

@yt_router.post('/qa/youtube')
async def get_qa_from_yt(url:str):
    transcript=transcribe_yt_to_str(url)
    object=qa_from_yt(transcript)
    response=object.QAList
    return response
