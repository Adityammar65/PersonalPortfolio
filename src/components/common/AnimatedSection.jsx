import { motion } from "framer-motion";
import useScrollDirection from "../../hooks/useScrollDirection";

export default function AnimatedSection({ children, id, className = "" }) {
  const direction = useScrollDirection();

  return (
    <motion.section
      id={id}
      className={className}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      {children}
    </motion.section>
  );
}
