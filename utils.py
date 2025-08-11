from typing import List
from schemas.interview_qa import QASet

def convert_qalist_to_dict(qa_set: QASet) -> List[dict]:
    result = []
    
    for qa_item in qa_set.QAList:
        qa_dict = {
            'question': qa_item.question,
            'answer': qa_item.answer
        }
        result.append(qa_dict)
    
    return result


