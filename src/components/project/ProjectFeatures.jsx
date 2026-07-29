import {
  FaCheckCircle,
  FaTerminal,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [FaTerminal, FaLayerGroup, FaCode, FaCheckCircle];

export default function ProjectFeatures({ features = [] }) {
  if (!features.length) return null;

  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Features</h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Key functionality implemented in this project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400 transition group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="font-semibold text-white">{feature}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
