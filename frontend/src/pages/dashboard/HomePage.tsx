import DashboardLayout from "../../components/layout/DashboardLayout";

export default function HomePage() {
  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-white">
          Welcome to CareerPilot AI 🚀
        </h1>

        <p className="mt-3 text-slate-400">
          Your personal AI-powered career companion.
        </p>

      </div>

      {/* Statistics */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">

          <h3 className="text-slate-400">
            Resume Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-500">
            --
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">

          <h3 className="text-slate-400">
            Jobs Matched
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-500">
            --
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">

          <h3 className="text-slate-400">
            Interviews
          </h3>

          <p className="mt-3 text-4xl font-bold text-purple-500">
            --
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">

          <h3 className="text-slate-400">
            Learning Progress
          </h3>

          <p className="mt-3 text-4xl font-bold text-orange-500">
            --
          </p>

        </div>

      </div>

      {/* Coming Soon */}

      <div className="mt-10 rounded-2xl bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          Coming Soon
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="text-lg font-semibold text-white">
              📄 Resume Analyzer
            </h3>

            <p className="mt-2 text-slate-400">
              Upload your resume and receive AI-powered suggestions.
            </p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="text-lg font-semibold text-white">
              💼 AI Job Matching
            </h3>

            <p className="mt-2 text-slate-400">
              Find the best opportunities based on your profile.
            </p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="text-lg font-semibold text-white">
              🎤 Interview Practice
            </h3>

            <p className="mt-2 text-slate-400">
              Practice technical and HR interviews with AI.
            </p>

          </div>

          <div className="rounded-xl border border-slate-700 p-5">

            <h3 className="text-lg font-semibold text-white">
              🛣 Learning Roadmap
            </h3>

            <p className="mt-2 text-slate-400">
              Personalized roadmap based on your goals.
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}