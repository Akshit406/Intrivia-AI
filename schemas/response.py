from typing import Optional, Literal
from pydantic import BaseModel, Field

class ResponseClarifier(BaseModel):
    response: str = Field(
        ...,
        description="""An acknowledging response to the user's answer. 
        You acknowledge responses in a short, pleasant, neutral sentence — 
        **never** revealing correctness, scores, or evaluation details directly. 
        It should not be more than one line long."""
    )

    justification: Optional[str] = Field(
        None,
        description="""Justification of the score that has been given for the user's answer, 
        It must mention the reason for which the mark has been awarded and the reason for deductions. 
        Properly reference the sections by mentioning the points which earned them marks or 
        lack of points which resulted in them losing marks."""
    )

    score: Optional[Literal['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']] = Field(
        None,
        description="""Specifies the score for the user's answer out of 10. Where 0 is the least 
        possible score and 10 is the highest possible score.
        The score must be given sensibly but still leniently. consider all the relevant sections of answer and 
        comparing it with the expected evaluation. If the answer somewhat matches with the expected answer
        give them decent marks, if its perfect then give them 10, and if its unrelated then give low marks (below 2)"""
    )

class Response(BaseModel):
    response:str = Field(..., description="""An acknowledging response to the user's answer.You acknowledge responses in a short, pleasant, neutral sentence — 
    **never** revealing correctness, scores, or evaluation details directly. It should not be more than one line long
""")
    justification:str=Field(None,description="""Justification of the score that has been given for the user's answer, 
    It must mention the reason for which the mark has been awarded and the reason for deductions.                     
    Properly reference the official answer by mentioning the points which earned them marks or lack of points which resulted in them losing marks.
    #IMPORTANT:
    you must definetly Give suggestions in ways by which their answer could have been better""")

    score:Literal['0','0.5','1', '1.5','2','2.5','3','3.5','4','4.5','5','5.5', '6','6.5','7','7.5','8','8.5','9','9.5','10']=Field(None,description="""
    Specifies the score for the user's answer out of 10. Where 0 is the least 
    possible score and 10 is the highest possible score.
    The score must be given sensibly but still leniently. consider all the relevant sections of answer and 
    comparing it with the expected evaluation.
    i.e 
    Give full marks(9.5 or 10) if the answer covers atleast 3 to 4 points from evaluation scheme.
    Give decent marks(5 to 9) if it covers more than 40-50% of the evaluation scheme
    Give poor marks(below 4) if and only if the answer is outright wrong or unrelated.                                                                           
    """)