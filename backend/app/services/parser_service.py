from app.services.resume_service import resume_service
from app.utils.pdf_parser import extract_text_from_pdf


class ParserService:

    def parse_resume(
        self,
        db,
        resume_id: int,
    ):

        # Get resume from database
        resume = resume_service.get_resume(
            db=db,
            resume_id=resume_id,
        )

        # Extract text from PDF
        extracted_text = extract_text_from_pdf(
            resume.filepath
        )

        return {
            "resume_id": resume.id,
            "filename": resume.filename,
            "text": extracted_text,
        }


parser_service = ParserService()