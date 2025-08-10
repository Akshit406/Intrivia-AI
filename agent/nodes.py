from schemas.agent_state import AgentState
from schemas.validator import ResponseFlag
from langchain_core.messages import AIMessage
from schemas.response import Response,ResponseClarifier
from initializers.initialize_llm import *
from agent.agent_utils import get_current_question_item
from prompts.validator import get_validator_prompt
from prompts.clarifier import get_clarifier_prompt
from prompts.interviewer import get_interviewer_prompt

llm=initialize_llm()
llm_2=initialize_llm_2()

def validator_node(state:AgentState):
    user_response = state["messages"][-1].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    llm_so=llm_2.with_structured_output(ResponseFlag)
    prompt=get_validator_prompt(user_response,current_question)
    object=llm_so.invoke(prompt)
    if(object.is_valid=='DIRECT'):
        state['is_valid']=True
    else:
        state['is_valid']=False
    return state

def router_node(state:AgentState):
    if(state['is_valid']):
        return 'evaluate'
    else:
        return 'clarify'

def clarifier_node(state:AgentState):
    user_response = state["messages"][0].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    prompt=get_clarifier_prompt(user_response,current_question)
    response=llm.invoke(prompt)
    state['messages']=response.content
    result=ResponseClarifier(response=response.content,justification=None,score=None)
    result.response=response
    result.justification=None
    result.score=None
    print("---FROM CLARIFIER---")
    print(result.response)
    return result

    
def interviewer_node(state:AgentState):
    user_response = state["messages"][-1].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    prompt=get_interviewer_prompt(user_response,current_question)
    llm_so=llm.with_structured_output(Response)
    result=llm_so.invoke(prompt)
    print("---FROM EVALUATOR---")
    print(result)
    state['messages']=result.response
    return result





