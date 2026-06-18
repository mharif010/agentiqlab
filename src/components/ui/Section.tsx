"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  className?: string;
  gradient?: boolean;
  children: React.ReactNode;
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className = "", gradient = false, id, children }, ref) => {
    const baseStyles = "py-16 md:py-24 lg:py-32 relative overflow-hidden";

    const bgClass = gradient
      ? "bg-gradient-to-b from-transparent via-accent-500/5 to-transparent"
      : "bg-transparent";

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`${baseStyles} ${bgClass} ${className}`}
      >
        {children}
      </motion.section>
    );
  },
);

Section.displayName = "Section";

export default Section;
