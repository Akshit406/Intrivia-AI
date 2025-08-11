from fastapi import APIRouter
from initializers.initialize_db import initialize_db
from bson import ObjectId

query_router = APIRouter()

@query_router.get('/search')
async def search_by_tag(tag: str):
    try:
        db = initialize_db()
        collection = db.Intrivia.interviews
        interviews = list(collection.find({'tags':tag.lower()}))
    
            
        if interviews:
            return {
                "success": True,
                "message": f"Found {len(interviews)} interviews with tag '{tag}'",
                "data": interviews
            }
        else:
            return {
                "success": True,
                "message": f"No interviews found with tag '{tag}'",
                "data": []
            }
            
    except Exception as e:
        return {
            "success": False,
            "message": "An error occurred while searching for interviews",
            "error": str(e)
        }

@query_router.get('/interview/{interview_id}')
async def get_interview_by_id(interview_id: str):

    try:

        if not ObjectId.is_valid(interview_id):
            return {
                "success": False,
                "message": "Invalid interview ID format"
            }

        db = initialize_db()
        collection = db.Intrivia.interviews
        

        interview = collection.find_one({"_id": ObjectId(interview_id)})
        
        if interview:
            interview["_id"] = str(interview["_id"])
            return {
                "success": True,
                "message": "Interview found",
                "data": interview
            }
        else:
            return {
                "success": False,
                "message": "Interview not found"
            }
            
    except Exception as e:
        return {
            "success": False,
            "message": "An error occurred while fetching the interview",
            "error": str(e)
        }
