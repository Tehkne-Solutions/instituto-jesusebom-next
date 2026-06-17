"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  style?: CSSProperties;
};

export function StaggerContainer({
  children,
  className,
  id,
  role,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  const sharedProps = {
    className,
    id,
    role,
    style,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  };

  if (reduceMotion) {
    return <div {...sharedProps}>{children}</div>;
  }

  return (
    <motion.div
      {...sharedProps}
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
