import { motion } from "framer-motion";

import { FaReact, FaLaravel, FaPhp, FaPython } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCodeigniter,
} from "react-icons/si";

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-blue-500/40 blur-[120px]" />

      <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full bg-cyan-500/40 blur-[120px]" />

      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
    </div>
  );
}
