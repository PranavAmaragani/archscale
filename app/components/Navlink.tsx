"use client";
import { motion } from "framer-motion";

export const NavLink = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative flex items-center justify-center px-4 py-2 rounded-full cursor-pointer overflow-hidden"
    >
      {/* Border bubble appears first */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        variants={{
          initial: { opacity: 0, scale: 0.7 },
          hovered: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Flip text wrapper */}
      <div className="relative overflow-hidden">
        {/* Default text */}
        <motion.span
          className="block text-inherit font-semibold"
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.15 }}
        >
          {children}
        </motion.span>

        {/* Hover text */}
        <motion.span
          className="absolute inset-0 block text-inherit font-semibold"
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.15 }}
        >
          {children}
        </motion.span>
      </div>
    </motion.div>
  );
};
