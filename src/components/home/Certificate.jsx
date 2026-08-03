import { AnimatedSection } from "../";

export default function Certificate() {
  return (
    <AnimatedSection id="certificate" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Certificates
        </h1>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
          Professional certifications and training that demonstrate my
          commitment to continuous learning and skill development.
        </p>

        {/* CODE GENERATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 md:mt-16">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  IBM SkillsBuild
                </h2>

                <p className="text-blue-400 mt-2">
                  Code Generation & Optimization using IBM Granite
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["IBM", "AI", "Granite"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1LE-1kqMRxFY-kioYgcNU6_LJQNWF7IUN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* GENERATIVE AI */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  IBM SkillsBuild
                </h2>

                <p className="text-blue-400 mt-2">
                  Use Generative AI for Software Development
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["IBM", "AI", "Granite"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1cyPAX4HIUXSdvFXRZD3ruazRo0nFhC-7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* GRANITE MODELS */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  IBM SkillsBuild
                </h2>

                <p className="text-blue-400 mt-2">
                  IBM Granite Models for Software Development
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["IBM", "AI", "Granite"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1Da-jJwENatVbhG0hkCyKJtAMhrS9_1rG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* CODE GENERATION AND OPTIMIZATION */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Hacktiv8 x IBM SkillsBuild
                </h2>

                <p className="text-blue-400 mt-2">
                  Code Generation and Optimization
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["AI", "IBM", "Hacktiv8"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1w-BLyKZDJQR4fXbPi5T3JjLwn-ESQxNF/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* BASIC WEB ASSISTANT */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Amikom University Yogyakarta
                </h2>

                <p className="text-blue-400 mt-2">
                  Certificate of Appreciation – Teaching Assistant
                </p>

                <p className="text-blue-400/70 mt-2 text-xs text-justify">
                  Recognized for serving as a Teaching Assistant for the Basic
                  Web Application Programming course during the 2025/2026 Even
                  Semester.
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2026
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Teaching Assistant", "Career", "Amikom"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1OYq6IVxWKh0QUQzKRvj6aLJzTOfNrkkj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* OOP ASSISTANT */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Amikom University Yogyakarta
                </h2>

                <p className="text-blue-400 mt-2">
                  Certificate of Appreciation – Teaching Assistant
                </p>

                <p className="text-blue-400/70 mt-2 text-xs text-justify">
                  Recognized for serving as a Teaching Assistant for the Object
                  Oriented Programming course during the 2025/2026 Even
                  Semester.
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2026
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Teaching Assistant", "Career", "Amikom"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1Nui0qkwinRSAny6ly2ICiLuvCeeSi5SE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>

          {/* COORDINATOR */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.15)]">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Amikom University Yogyakarta
                </h2>

                <p className="text-blue-400 mt-2">
                  Certificate of Appreciation – Course Coordinator
                </p>

                <p className="text-blue-400/70 mt-2 text-xs text-justify">
                  Recognized for serving as the Course Coordinator for
                  Object-Oriented Programming during the 2025/2026 Even
                  Semester.
                </p>
              </div>

              <span className="self-start whitespace-nowrap text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                2026
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Coordinator", "Career", "Amikom"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1MTABWRoO8jE55t5PlBq4P3k0YJPN9HRi/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              View Credential →
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
