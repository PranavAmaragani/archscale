"use client";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const NavDropdown = ({
  label,
  onOpen,
  onClose,
}: {
  label: string;
  onOpen: () => void;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      className="relative flex items-center justify-center gap-2 px-4 py-1 rounded-full cursor-pointer overflow-hidden text-inherit"
    >
      {/* Border follows text color */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        variants={{
          initial: { opacity: 0, scale: 0.7 },
          hovered: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Flip text */}
      <div className="relative overflow-hidden">
        <motion.span
          className="block font-semibold text-inherit"
          variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.15 }}
        >
          {label}
        </motion.span>

        <motion.span
          className="absolute inset-0 block font-semibold text-inherit"
          variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
          transition={{ duration: 0.35, ease: "easeInOut", delay: 0.15 }}
        >
          {label}
        </motion.span>
      </div>

      {/* Chevron animation */}
      <div className="relative w-4 h-4 text-inherit">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{ initial: { opacity: 1, y: 0 }, hovered: { opacity: 0, y: -4 } }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{ initial: { opacity: 0, y: 4 }, hovered: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25, delay: 0.15 }}
        >
          <ChevronUp size={18} />
        </motion.div>
      </div>
    </motion.div>
  );
};
