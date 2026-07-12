import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-30">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-white text-4xl font-bold text-center">
          Experience
        </h1>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">
          My professional and academic experiences that have helped shape my
          technical and collaborative skills.
        </p>

        <div
          className="
            mt-16
            rounded-2xl
            border border-slate-700
            bg-slate-800/40
            backdrop-blur-md
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500
            hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
          "
        >
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Web Programming Laboratory Assistant
              </h2>

              <p className="text-blue-400 font-medium mt-2">
                Universitas Amikom Yogyakarta
              </p>
            </div>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm">
              2025 - Present
            </span>
          </div>

          <p className="text-slate-300 leading-8 mt-8">
            Assisted students during Web Programming laboratory sessions by
            explaining programming concepts, troubleshooting coding issues, and
            providing guidance on practical assignments. Collaborated with
            lecturers to ensure effective learning and helped maintain a
            productive classroom environment.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              Laravel
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              PHP
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              HTML
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              CSS
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              JavaScript
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              Mentoring
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
