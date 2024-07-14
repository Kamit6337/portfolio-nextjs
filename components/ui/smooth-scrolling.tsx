"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const SmoothScrolling = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {children}
    </>
  );
};

export default SmoothScrolling;
