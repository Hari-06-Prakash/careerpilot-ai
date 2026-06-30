import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Good Morning, Hari 👋
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back to CareerPilot AI
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            H
          </div>

          <div>
            <p className="font-semibold text-white">
              Hari
            </p>

            <p className="text-xs text-slate-400">
              AIML Student
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </header>
  );
}