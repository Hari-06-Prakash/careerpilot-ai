import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="space-y-8">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Forgot Password
          </h2>

          <p className="mt-2 text-gray-400">
            Enter your email address and we'll send you a reset link.
          </p>

        </div>

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

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Reset Link
          </button>

        </form>

        <div className="text-center">

          <Link
            to="/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            ← Back to Login
          </Link>

        </div>

      </div>
    </AuthLayout>
  );
}