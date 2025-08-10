from fastapi import  APIRouter
from langchain_core.messages import HumanMessage
from agent.graph import graph
agent_router=APIRouter()

@agent_router.post('/interview/agent')
def interact_with_agent(user_answer:str,question_id:int,session_id:str,interview_id:str):
    config = {"configurable": {
    "thread_id": session_id
    }}
    state={
        "messages":[HumanMessage(content=user_answer)],
        "interview_id":interview_id,
        "question_id":question_id,
        "is_valid":True
    }
    response=graph.invoke(state,config=config)
    return response

