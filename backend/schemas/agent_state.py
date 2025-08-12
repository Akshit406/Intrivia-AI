from typing import TypedDict,Annotated,Sequence
from langchain_core.messages import BaseMessage
from langgraph.graph.message import add_messages

class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], add_messages]
    interview_id:str
    question_id:int
    is_valid:bool

