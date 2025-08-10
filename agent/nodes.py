from langchain_core.messages import AIMessage
from schemas.agent_state import AgentState
from schemas.validator import ResponseFlag
from schemas.response import Response
from initializers.initialize_llm import initialize_llm
from agent.agent_utils import get_current_question_item
from prompts.validator import get_validator_prompt
from prompts.clarifier import get_clarifier_prompt
from prompts.interviewer import get_interviewer_prompt

llm=initialize_llm()

def validator_node(state:AgentState):
    user_response = state["messages"][0].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    llm_so=llm.with_structured_output(ResponseFlag)
    prompt=get_validator_prompt(user_response,current_question)
    object=llm_so.invoke(prompt)
    if(object.is_valid=='DIRECT'):
        state['is_valid']=True
    else:
        state['is_valid']=False
    return state

def router_node(state:AgentState):
    user_response = state["messages"][0].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    llm_so=llm.with_structured_output(ResponseFlag)
    prompt=get_validator_prompt(user_response,current_question)
    object=llm_so.invoke(prompt)
    if(object.is_valid=='DIRECT'):
        return 'clarify'
    else:
        return 'evaluate'

def clarifier_node(state:AgentState):
    user_response = state["messages"][0].content
    current_question = get_current_question_item(state['interview_id'],state['question_id'])
    prompt=get_clarifier_prompt(user_response,current_question)
    response=llm.invoke(prompt)
    state['messages']=AIMessage(response)
    result=Response()
    result.response=response
    result.justification=None
    result.score=None
    return result

    
def interviewer_node(state:AgentState):
    user_response = state["messages"][0].content
    current_question = get_current_question_item()
    prompt=get_interviewer_prompt(user_response,current_question)
    llm_so=llm.with_structured_output(Response)
    result=llm_so.invoke(prompt)
    state['messages']=AIMessage(result.response)
    return result





