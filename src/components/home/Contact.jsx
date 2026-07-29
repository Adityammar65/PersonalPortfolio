import { AnimatedSection } from "../";

import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-8 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Get In Touch
        </h1>

        <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
          Interested in working together or have a project in mind? I'd love to
          hear from you.
        </p>

        <p className="text-slate-300 text-center leading-7 sm:leading-8 mt-8 max-w-3xl mx-auto text-sm sm:text-base">
          Thanks for visiting my portfolio. If you're looking for a passionate
          developer who enjoys learning, solving problems, and building
          meaningful web applications, I'd be happy to connect and discuss how I
          can contribute to your team or project.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 md:mt-16">
          <div
            className="
              rounded-2xl
              border border-slate-700
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
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Contact Information
            </h2>

            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Feel free to reach out through any of these platforms.
            </p>

            <div className="mt-8 sm:mt-10 space-y-6">
              <a
                href="mailto:adityaammar65@gmail.com"
                target="_blank"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition break-all"
              >
                <MdEmail className="text-2xl sm:text-3xl flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  adityaammar65@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/Adityammar65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition"
              >
                <FaGithub className="text-2xl sm:text-3xl flex-shrink-0" />
                <span className="text-sm sm:text-base">Adityammar65</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-ammar-a90b93368/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-2xl sm:text-3xl flex-shrink-0" />
                <span className="text-sm sm:text-base">Aditya Ammar</span>
              </a>

              <a
                href="https://wa.me/62895366117068"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition"
              >
                <FaWhatsapp className="text-2xl sm:text-3xl flex-shrink-0" />
                <span className="text-sm sm:text-base">+62 895 3661 17068</span>
              </a>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border border-slate-700
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
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Download Resources
            </h2>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Download my professional documents, including my CV, portfolio,
              and resume.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div
                className="
      flex-1
      flex
      flex-col
      rounded-2xl
      border border-slate-700
      bg-slate-900/30
      p-6
      transition-all
      duration-300
      hover:border-blue-500
      hover:-translate-y-1
    "
              >
                <h3 className="text-xl font-semibold text-white">
                  Curriculum Vitae
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A detailed overview of my education, technical skills, work
                  experience, certifications, and selected projects.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/file/d/1WoGco8XN89sBQ8iyd0L-6TrRAcPjX4ZL/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-500 px-4 py-2 text-center text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
                  >
                    English
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1hlbW7NHW-LkRqfGhnmkN8Rg63BqofEV9/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-500 px-4 py-2 text-center text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
                  >
                    Indonesian
                  </a>
                </div>
              </div>

              <div
                className="
      flex-1
      flex
      flex-col
      rounded-2xl
      border border-slate-700
      bg-slate-900/30
      p-6
      transition-all
      duration-300
      hover:border-blue-500
      hover:-translate-y-1
    "
              >
                <h3 className="text-xl font-semibold text-white">Portfolio</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A collection of selected projects showcasing my web
                  development, software engineering, and UI implementation
                  experience.
                </p>

                <a
                  href="https://drive.google.com/file/d/1wi0xS0Hqkn9KJBhx8_0w9t3wizyQJqvy/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-xl bg-blue-500 py-3 text-center font-medium text-white transition hover:bg-blue-600"
                >
                  Download Portfolio
                </a>
              </div>

              <div
                className="
      flex-1
      flex
      flex-col
      rounded-2xl
      border border-slate-700
      bg-slate-900/30
      p-6
      transition-all
      duration-300
      hover:border-blue-500
      hover:-translate-y-1
    "
              >
                <h3 className="text-xl font-semibold text-white">Resume</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A concise one-page summary highlighting my skills, experience,
                  and key achievements.
                </p>

                <a
                  href="https://drive.google.com/file/d/1CvTr2GNMvO0v2A64x1b4wLJyBsXCrRqL/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 rounded-xl bg-blue-500 py-3 text-center font-medium text-white transition hover:bg-blue-600"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
