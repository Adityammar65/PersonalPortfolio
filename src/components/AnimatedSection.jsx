import { motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

export default function AnimatedSection({ children, id, className = "" }) {
  const direction = useScrollDirection();

  return (
    <motion.section
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: direction === "down" ? 80 : -80,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
    >
      {children}
    </motion.section>
  );
}
