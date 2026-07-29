import {
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaCode,
  FaCreditCard,
  FaBolt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiCodeigniter,
  SiSupabase,
  SiVite,
  SiStreamlit,
} from "react-icons/si";

import { motion } from "framer-motion";

const iconMap = {
  React: FaReact,
  Laravel: FaLaravel,
  Bootstrap: FaBootstrap,
  "CodeIgniter 4": SiCodeigniter,
  MySQL: SiMysql,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Python: FaPython,
  Vite: SiVite,
  Streamlit: SiStreamlit,
  Supabase: SiSupabase,
  GitHub: FaGithub,
  Midtrans: FaCreditCard,
  AJAX: FaBolt,
};

export default function ProjectTechStack({ tech = [] }) {
  if (!tech.length) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Tech Stack</h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Technologies and tools used throughout development.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tech.map((item, index) => {
            const Icon = iconMap[item] || FaCode;

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="mb-4 flex justify-center text-5xl text-cyan-400 transition duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="text-center font-semibold text-white">{item}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
