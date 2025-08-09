from schemas.interview_qa import *
from initializers.initialize_llm import initialize_llm
from prompts.yt_prompt import get_yt_prompt

def qa_from_yt(transcript:str)->QASet:
    llm=initialize_llm()
    prompt=get_yt_prompt(transcript)
    llm_so = llm.with_structured_output(QASet)
    object= llm_so.invoke(prompt)
    return object
