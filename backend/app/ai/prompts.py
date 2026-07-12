RESUME_ANALYSIS_PROMPT = """
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

JSON Format:

{{
    "personal_information": {{
        "name": "",
        "email": "",
        "phone": "",
        "linkedin": "",
        "github": ""
    }},

    "skills": [],

    "education": [],

    "projects": [],

    "certifications": [],

    "soft_skills": [],

    "summary": ""
}}

Resume:

{resume_text}

Rules:

1. Return ONLY valid JSON.
2. Do not explain anything.
3. Do not use markdown.
4. Do not add extra text.
"""