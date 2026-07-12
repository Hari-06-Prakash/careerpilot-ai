from app.services.resume_service import resume_service
from app.utils.pdf_parser import extract_text_from_pdf
from app.ai.resume_analyzer import resume_analyzer


class ParserService:

    def parse_resume(
        self,
        db,
        resume_id: int,
    ):

        # --------------------------------
        # Get Resume
        # --------------------------------
        resume = resume_service.get_resume(
            db=db,
            resume_id=resume_id,
        )

        # --------------------------------
        # Extract Text From PDF
        # --------------------------------
        extracted_text = extract_text_from_pdf(
            resume.filepath
        )

        # --------------------------------
        # AI Resume Analysis
        # --------------------------------
        analysis = resume_analyzer.analyze_resume(
            extracted_text
        )

        # --------------------------------
        # Return Response
        # --------------------------------
        return {
            "resume_id": resume.id,
            "filename": resume.filename,
            "analysis": analysis,
        }


parser_service = ParserService()