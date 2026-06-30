import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-gray-400">
            Login to continue your AI career journey.
          </p>

        </div>

        {/* Login Form */}

        <form className="space-y-5">

          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        {/* Footer */}

        <div className="text-center text-gray-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Create Account
          </Link>

        </div>

      </div>
    </AuthLayout>
  );
}