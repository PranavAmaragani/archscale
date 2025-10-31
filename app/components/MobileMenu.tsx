"use client";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function MobileMenu({
  open,
  onClose,
  scrolled,
}: {
  open: boolean;
  onClose: () => void;
  scrolled: boolean;
}) {
  const menu = [
    { title: "Home", variants: ["(A)", "(B)", "(C)"] },
    { title: "About" },
    { title: "Our Services" },
    { title: "Projects", variants: ["(A)", "(B)", "(C)"] },
    { title: "Blog" },
    { title: "Contact", variants: ["(A)", "(B)", "(C)"] },
  ];

  const social = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className={`fixed inset-0 z-[999] px-6 py-8 
          ${scrolled ? "bg-[#EEEDEA] text-black" : "bg-black text-white"}`}
        >
          {/* Top bar */}
          <div className="flex justify-between items-center mb-10">
            <Image
              src="/archscale_logo.svg"
              width={150}
              height={40}
              alt="logo"
              className={`${scrolled ? "brightness-0" : "brightness-0 invert"}`}
            />

            <button onClick={onClose}>
              <X size={28} className={`${scrolled ? "text-black" : "text-white"}`} />
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <p className="uppercase text-sm opacity-60">Navigation</p>
            <div className="space-y-5 text-lg font-medium">
              {menu.map((item) => (
                <div key={item.title} className="flex flex-wrap items-center gap-2">
                  <Link href="#" onClick={onClose}>
                    {item.title}
                  </Link>
                  {item.variants &&
                    item.variants.map((v) => (
                      <span
                        key={v}
                        className="text-sm opacity-60"
                      >
                        {v}
                      </span>
                    ))}
                </div>
              ))}
            </div>

            <p className="uppercase text-sm opacity-60 pt-6">Other</p>
            <div className="space-y-3 text-lg font-medium">
              {social.map((s) => (
                <Link key={s} href="#" onClick={onClose}>
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
