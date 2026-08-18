import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  distance?: number;
}

const ScrollReveal = ({ children, className = "", direction = "up", delay = 0, distance = 50 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const eased = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(eased, [0, 1], direction === "up" ? [distance, 0] : [0, 0]);
  const x = useTransform(
    eased,
    [0, 1],
    direction === "left" ? [-distance, 0] : direction === "right" ? [distance, 0] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      transition={{ delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;