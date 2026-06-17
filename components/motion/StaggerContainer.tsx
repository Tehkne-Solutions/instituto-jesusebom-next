"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type StaggerContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function StaggerContainer({ children, className, ...props }: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      {...props}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
