import { useEffect, useState } from "react";
import {
    uploadResume,
    getUserResumes,
    deleteResume,
    viewResume,
} from "../../services/resumeService";

export default function ResumeUploader() {

    // Temporary user id
    // Later we will replace this with JWT Authentication
    const USER_ID = 1;

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    const [resumes, setResumes] = useState<any[]>([]);

    // ======================================
    // Load User Resumes
    // ======================================

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

    // ======================================
    // File Selection
    // ======================================

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (
            e.target.files &&
            e.target.files.length > 0
        ) {

            setFile(e.target.files[0]);

        }

    };

    // ======================================
    // Upload Resume
    // ======================================

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

    // ======================================
    // View Resume
    // ======================================

    const handleView = (
        resumeId: number
    ) => {

        viewResume(resumeId);

    };

    // ======================================
    // Delete Resume
    // ======================================

    const handleDelete = async (
        resumeId: number
    ) => {

        const confirmed = window.confirm(

            "Are you sure you want to delete this resume?"

        );

        if (!confirmed) return;

        try {

            await deleteResume(resumeId);

            alert(
                "Resume deleted successfully!"
            );

            await loadResumes();

        } catch (error) {

            console.error(error);

            alert(
                "Delete Failed"
            );

        }

    };

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

    {/* Header */}

    <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
            Resume Manager
        </h2>

        <p className="mt-2 text-gray-400">
            Upload, manage and view your resumes.
        </p>

    </div>

    {/* Upload Section */}

    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">

        <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mb-4 block w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
        />

        {

            file && (

                <div className="mb-4 rounded-lg border border-green-600 bg-green-900/20 p-3">

                    <p className="text-green-400">

                        Selected File:

                        <span className="ml-2 font-semibold">

                            {file.name}

                        </span>

                    </p>

                </div>

            )

        }

        <button
            type="button"
            onClick={handleUpload}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >

            {

                loading
                    ? "Uploading..."
                    : "Upload Resume"

            }

        </button>

    </div>

    {/* Resume List */}

    <div className="mt-10">

        <h2 className="mb-5 text-2xl font-bold text-white">

            Uploaded Resumes

        </h2>

        {

            resumes.length === 0 ? (

                <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

                    <p className="text-gray-400">

                        No resumes uploaded yet.

                    </p>

                </div>

            ) : (

                <div className="space-y-5">

                    {

                        resumes.map((resume) => (

                            <div
                                key={resume.id}
                                className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500"
                            >

                                {/* Resume Info */}

                                <div>

                                    <h3 className="text-xl font-semibold text-white">

                                        📄 {resume.filename}

                                    </h3>

                                    <p className="mt-2 text-sm text-gray-400">

                                        User ID : {resume.user_id}

                                    </p>

                                    <p className="text-sm text-gray-400">

                                        Uploaded :

                                        {" "}

                                        {

                                            new Date(

                                                resume.uploaded_at

                                            ).toLocaleString()

                                        }

                                    </p>

                                </div>

                                {/* Buttons */}

                                <div className="flex gap-3">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleView(resume.id)
                                        }
                                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                                    >

                                        👁 View

                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(resume.id)
                                        }
                                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                                    >

                                        🗑 Delete

                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

            )

        }

    </div>

</div>

);
}