"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  text: string;
  className?: string;
};

export function RevealText({ text, className }: RevealTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.h2>
  );
}
