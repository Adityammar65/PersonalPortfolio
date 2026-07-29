import { FaGithub, FaGlobe, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectLinks({ project }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Project Resources
              </h2>

              <p className="mt-3 max-w-2xl text-zinc-400">
                Explore the project's source code or try the live application if
                a public demo is available.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <FaGithub />
                Source Code
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-900 transition hover:bg-cyan-400"
                >
                  <FaGlobe />
                  Live Demo
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 rounded-xl border border-dashed border-zinc-700 px-6 py-3 text-zinc-500">
                  <FaArrowRight />
                  Demo is not available
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
