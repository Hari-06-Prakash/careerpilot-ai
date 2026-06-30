import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Workspace",
    icon: "🏠",
    path: "/dashboard",
  },
  {
    name: "Resume Intelligence",
    icon: "🧠",
    path: "/resume",
  },
  {
    name: "Opportunity Explorer",
    icon: "🎯",
    path: "/jobs",
  },
  {
    name: "Career Roadmap",
    icon: "🛣",
    path: "/roadmap",
  },
  {
    name: "Interview Studio",
    icon: "🎤",
    path: "/interview",
  },
  {
    name: "Coding Studio",
    icon: "💻",
    path: "/coding",
  },
  {
    name: "Analytics",
    icon: "📊",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: "⚙",
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-white">
          CareerPilot AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Agentic AI Career Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>

          </NavLink>
        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-800 p-4">

          <p className="text-sm font-semibold text-white">
            CareerPilot AI
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Version 1.0.0
          </p>

        </div>

      </div>

    </aside>
  );
}