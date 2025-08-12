from pydantic import Field,BaseModel
from typing import Literal

class ResponseFlag(BaseModel):
    is_valid:Literal['DIRECT','NOT_DIRECT']=Field(...,description="""Based on the user's answer and the question asked by the interviewer classify whether the 
    response is a direct answer to the question asked by the interviewer or if its a clarifying request about the question
    Respond with 
    DIRECT: In case if the user's response is a direct answer to the question. 
    NOT_DIRECT: If the user's response is a clarifying question (such as Asking to repeat the question, or enquiry about the question)
    """)