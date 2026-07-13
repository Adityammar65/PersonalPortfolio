import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Experience
        </h1>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
          My professional and academic experiences that have helped shape my
          technical and collaborative skills.
        </p>

        <div
          className="
            mt-12
            md:mt-16

            rounded-2xl
            border
            border-slate-700
            bg-slate-800/40
            backdrop-blur-md

            p-6
            sm:p-8

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-blue-500
            hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:justify-between
              sm:items-start
              gap-4
            "
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                Web Programming Laboratory Assistant
              </h2>

              <p className="text-blue-400 font-medium mt-2">
                Universitas Amikom Yogyakarta
              </p>
            </div>

            <span
              className="
                self-start
                px-4
                py-2
                rounded-full
                bg-blue-500/10
                text-blue-300
                text-xs
                sm:text-sm
                whitespace-nowrap
              "
            >
              2025 - Present
            </span>
          </div>

          <p className="mt-8 text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">
            Assisted students during Web Programming laboratory sessions by
            explaining programming concepts, troubleshooting coding issues, and
            providing guidance on practical assignments. Collaborated with
            lecturers to ensure effective learning and helped maintain a
            productive classroom environment.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-8">
            {["Laravel", "PHP", "HTML", "CSS", "JavaScript", "Mentoring"].map(
              (skill) => (
                <span
                  key={skill}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-300
                  text-xs
                  sm:text-sm
                "
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
