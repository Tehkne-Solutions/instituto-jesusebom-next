"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.985 },
        show: { opacity: 1, y: 0, scale: 1 }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
