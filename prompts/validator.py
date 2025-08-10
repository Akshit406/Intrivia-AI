#TODO: Write validation prompt

def get_validator_prompt(user_response, current_question):
    prompt = f"""
You are a validator. Decide if the user's reply is a DIRECT answer to the question.

DIRECT = The reply addresses the question's intent (even if incomplete, incorrect, or says “I don’t know”).
NOT_DIRECT = The reply does not answer the question (e.g., asks for clarification, is unrelated, or jokes).

Question: {current_question.question}
User Reply: {user_response}

Respond only with: DIRECT or NOT_DIRECT
"""
    return prompt
