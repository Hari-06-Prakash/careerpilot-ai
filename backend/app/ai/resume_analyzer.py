import json

from app.ai.gemini_client import gemini_client
from app.ai.prompts import RESUME_ANALYSIS_PROMPT


class ResumeAnalyzer:

    def analyze_resume(
        self,
        resume_text: str,
    ):

        # Build prompt
        prompt = RESUME_ANALYSIS_PROMPT.format(
            resume_text=resume_text
        )

        # Send prompt to Gemini
        response = gemini_client.generate_content(
            prompt
        )

        # Convert JSON string into Python dictionary
        try:

            return json.loads(response)

        except json.JSONDecodeError:

            return {
                "success": False,
                "message": "Gemini returned an invalid JSON response.",
                "raw_response": response,
            }


resume_analyzer = ResumeAnalyzer()