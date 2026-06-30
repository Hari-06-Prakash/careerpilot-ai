import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-12 text-white">

          <h1 className="text-5xl font-bold leading-tight">
            CareerPilot AI
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Your Agentic AI Operating System for Career Development.
          </p>

          <div className="mt-12 space-y-4">

            <div>
              ✅ AI Resume Intelligence
            </div>

            <div>
              ✅ AI Job Matching
            </div>

            <div>
              ✅ AI Interview Coach
            </div>

            <div>
              ✅ AI Career Roadmap
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center bg-slate-900 p-10">

          <div className="w-full max-w-md">

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}