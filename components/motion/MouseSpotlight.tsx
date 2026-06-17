"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type MouseSpotlightProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function MouseSpotlight({ children, className, style }: MouseSpotlightProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const background = useMotionTemplate`
    radial-gradient(
      520px circle at ${x}px ${y}px,
      rgba(255, 255, 255, 0.18),
      rgba(153, 202, 60, 0.08) 28%,
      transparent 62%
    )
  `;

  return (
    <motion.div
      className={`mouseSpotlightRoot ${className ?? ""}`}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.992 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
    >
      {!reduceMotion && <motion.div aria-hidden="true" className="mouseSpotlightGlow" style={{ background }} />}
      {children}
    </motion.div>
  );
}
