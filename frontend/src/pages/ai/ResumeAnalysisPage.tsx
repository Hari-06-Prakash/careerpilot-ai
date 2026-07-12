import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { analyzeResume } from "../../services/resumeService";

import PersonalInfoCard from "../../components/ai/PersonalInfoCard";
import SkillsCard from "../../components/ai/SkillsCard";
import EducationCard from "../../components/ai/EducationCard";

export default function ResumeAnalysisPage() {

    const { resumeId } = useParams();

    const [loading, setLoading] = useState(true);

    const [analysis, setAnalysis] = useState<any>(null);

    useEffect(() => {

        const fetchAnalysis = async () => {

            try {

                const response = await analyzeResume(
                    Number(resumeId)
                );

                setAnalysis(response.data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchAnalysis();

    }, [resumeId]);

    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white text-2xl">

                🤖 AI is analyzing your resume...

            </div>

        );

    }

    if (!analysis) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-red-400 text-2xl">

                Failed to analyze resume.

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-950 p-10">

            <div className="mx-auto max-w-7xl">

                <h1 className="mb-10 text-center text-5xl font-bold text-white">

                    🤖 AI Resume Analysis

                </h1>

                <div className="grid gap-8">

                    <PersonalInfoCard
                        personalInformation={
                            analysis.analysis.personal_information
                        }
                    />

                    <SkillsCard
                        skills={
                            analysis.analysis.skills
                        }
                    />

                    <EducationCard
                        education={analysis.analysis.education}
                    />

                </div>

            </div>

        </div>

    );

}