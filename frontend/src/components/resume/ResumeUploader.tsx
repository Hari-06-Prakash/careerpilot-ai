import { useEffect, useState } from "react";
import {
    uploadResume,
    getUserResumes,
    deleteResume,
} from "../../services/resumeService";

export default function ResumeUploader() {

    const USER_ID = 1;

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [resumes, setResumes] = useState<any[]>([]);

    const loadResumes = async () => {
        try {
            const data = await getUserResumes(USER_ID);
            setResumes(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadResumes();
    }, []);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }

    };

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        try {

            setLoading(true);

            const response = await uploadResume(
                file,
                USER_ID
            );

            alert(response.message);

            setFile(null);

            await loadResumes();

        } catch (error: any) {

            console.error(error);

            alert(
                error.response?.data?.detail ??
                "Upload Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (
        resumeId: number
    ) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this resume?"
        );

        if (!confirmed) return;

        try {

            await deleteResume(resumeId);

            alert("Resume deleted successfully!");

            await loadResumes();

        } catch (error) {

            console.error(error);

            alert("Delete Failed");

        }

    };

    return (

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold text-white">
                Resume Upload
            </h2>

            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="mb-4 block w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
            />

            {file && (

                <p className="mb-4 text-green-400">
                    Selected File: {file.name}
                </p>

            )}

            <button
                type="button"
                onClick={handleUpload}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
                {loading
                    ? "Uploading..."
                    : "Upload Resume"}
            </button>

            <hr className="my-8 border-slate-700" />

            <h2 className="mb-4 text-2xl font-bold text-white">
                Uploaded Resumes
            </h2>

            {

                resumes.length === 0 ? (

                    <p className="text-gray-400">
                        No resumes uploaded.
                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            resumes.map((resume) => (

                                <div
                                    key={resume.id}
                                    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-5"
                                >

                                    <div>

                                        <h3 className="text-lg font-semibold text-white">
                                            📄 {resume.filename}
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-400">
                                            User ID: {resume.user_id}
                                        </p>

                                        <p className="text-sm text-gray-400">
                                            Uploaded:
                                            {" "}
                                            {new Date(
                                                resume.uploaded_at
                                            ).toLocaleString()}
                                        </p>

                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(resume.id)
                                        }
                                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}