import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { registerUser } from "../../services/authService";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      setLoading(true);

      await registerUser(
        name,
        email,
        password
      );

      alert("Registration Successful!");

      navigate("/login");

    } catch (error: any) {

      alert(
        error.response?.data?.detail ??
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <AuthLayout>
      <div className="space-y-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-gray-400">
            Start your AI-powered career journey today.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="text-center text-gray-400">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>

        </div>

      </div>
    </AuthLayout>
  );
}