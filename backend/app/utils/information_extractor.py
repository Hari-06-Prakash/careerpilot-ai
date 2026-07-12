import re


class InformationExtractor:

    # -----------------------------
    # Extract Email
    # -----------------------------
    @staticmethod
    def extract_email(text: str):

        pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"

        match = re.search(pattern, text)

        if match:
            return match.group()

        return None

    # -----------------------------
    # Extract Phone Number
    # -----------------------------
    @staticmethod
    def extract_phone(text: str):

        pattern = r"(\+91[\s-]?)?[6-9]\d{9}"

        match = re.search(pattern, text)

        if match:
            return match.group()

        return None

    # -----------------------------
    # Extract LinkedIn
    # -----------------------------
    @staticmethod
    def extract_linkedin(text: str):

        pattern = r"(linkedin\.com/in/[A-Za-z0-9_-]+)"

        match = re.search(pattern, text)

        if match:
            return match.group()

        return None

    # -----------------------------
    # Extract GitHub
    # -----------------------------
    @staticmethod
    def extract_github(text: str):

        pattern = r"(github\.com/[A-Za-z0-9_-]+)"

        match = re.search(pattern, text)

        if match:
            return match.group()

        return None

    # -----------------------------
    # Extract Name
    # -----------------------------
    @staticmethod
    def extract_name(text: str):

        lines = text.split("\n")

        for line in lines:

            line = line.strip()

            if len(line) > 3:

                if (
                    "@" not in line
                    and "linkedin" not in line.lower()
                    and "github" not in line.lower()
                ):
                    return line

        return None


information_extractor = InformationExtractor()