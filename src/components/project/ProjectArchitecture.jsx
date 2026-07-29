import { FaCode, FaDatabase, FaLayerGroup, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [FaCode, FaServer, FaDatabase, FaLayerGroup];

export default function ProjectArchitecture({ architecture = [] }) {
  if (!architecture.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            Project Architecture
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Overview of the application's architecture and how each major
            component works together.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {architecture.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400 transition group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-zinc-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
