from pydantic import Field,BaseModel
from typing import Literal

class Response(BaseModel):
    response:str = Field(..., description=""".
""")
    justification:str=Field(...,description="""Justification of the score that has been given for the user's answer, 
    It must mention the reason for which the mark has been awarded and the reason for deductions.Properly reference 
    the sections by mentioning the points which earned them marks or lack of points which resulted in them losing marks.""")

    score:Literal['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']=Field(...,description="""
    Specifies the score for the user's answer out of 10. Where 0 is the least possible score and 10 is the highest possible score
    The score must be given sensibly by considering all the relevant sections of answer and comparing it with the expected evaluation.
    Do not just give a random scoring based on 'what-feels-right' instead thoroughly compare the answer with the expected evaluation scheme
    and then give them the answer""")

