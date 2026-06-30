import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { loginUser } from "../../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        setLoading(true);

        const data = await loginUser(email, password);

        localStorage.setItem("token", data.access_token);

        alert("Login Successful!");

        navigate("/dashboard");

    } catch (error: any) {
        alert(
            error.response?.data?.detail ??
            "Login Failed"
        );
    } finally {
        setLoading(false);
    }
};
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

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
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