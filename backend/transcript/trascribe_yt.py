from youtube_transcript_api import YouTubeTranscriptApi

def transcribe_yt_to_str(url:str)->str:
    result=""
    video_id=url.strip("https://www.youtube.com/watch?v=").strip("?feature=shared").strip("https://youtu.be/")
    ytt_api = YouTubeTranscriptApi()
    fetched_transcript=ytt_api.fetch(video_id)
    for snippet in fetched_transcript:
        result+=snippet.text
    return result

