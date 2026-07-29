import {
  FaGithub,
  FaGlobe,
  FaCalendar,
  FaUser,
  FaCircle,
} from "react-icons/fa6";

export default function ProjectHero({ project }) {
  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl ${
            project.status === "Completed"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
          }`}
        >
          <FaCircle className="text-[8px]" />
          {project.status}
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-xl text-cyan-400">{project.tagline}</p>

        <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <FaUser className="mb-3 text-cyan-400" />
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 font-semibold text-white">{project.role}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <FaCalendar className="mb-3 text-cyan-400" />
            <p className="text-sm text-zinc-500">Duration</p>
            <p className="mt-1 font-semibold text-white">{project.duration}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <FaCircle className="mb-3 text-cyan-400" />
            <p className="text-sm text-zinc-500">Status</p>
            <p className="mt-1 font-semibold text-white">{project.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
