from langgraph.checkpoint.memory import MemorySaver
from langchain_core.messages import HumanMessage
from agent.nodes import *
from langgraph.graph import StateGraph,START,END

memory = MemorySaver()
graph_builder=StateGraph(AgentState)
graph_builder.add_node("validator",validator_node)
graph_builder.add_node("router",lambda state:state)
graph_builder.add_node("clarifier",clarifier_node)
graph_builder.add_node("interviewer",interviewer_node)
graph_builder.add_edge(START,"validator")
graph_builder.add_edge("validator","router")
graph_builder.add_conditional_edges(
    "router",
    router_node,
    {
        'clarify':'clarifier',
        'evaluate':'interviewer'
    }
)
graph_builder.add_edge('clarifier',END)
graph_builder.add_edge('interviewer',END)
graph=graph_builder.compile(checkpointer=memory)
