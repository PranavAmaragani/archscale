"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft } from "lucide-react";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showHeroReveal, setShowHeroReveal] = useState(false);
  const [showCenterLine, setShowCenterLine] = useState(false);

  useEffect(() => {
    // Preloader runs for ~4s
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
      setShowHeroReveal(true);
    }, 4000);

    // Hero reveal ends after ~2.5s
    const heroTimer = setTimeout(() => {
      setShowHeroReveal(false);
    }, 6500);

    // Center line appears after middle collapse
    const lineTimer = setTimeout(() => {
      setShowCenterLine(true);
    }, 5000);

    // Line shrinks away after ~1s
    const lineHideTimer = setTimeout(() => {
      setShowCenterLine(false);
    }, 6800);

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(heroTimer);
      clearTimeout(lineTimer);
      clearTimeout(lineHideTimer);
    };
  }, []);

  return (
    <>
      {/* === Preloader Screen === */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]"
          >
            {/* Logo */}
            <div className="overflow-hidden z-20">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-2xl font-bold"
              >
               
                <Image src="/paneluxeBlack.svg" alt="houseLogo" height={200} width={200} />
              </motion.div>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mt-4 z-20">
              <motion.div
                className="text-lg font-semibold tracking-tight flex gap-4"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              >
                <p>We Craft Interiors</p>
                <Image src="/gold+.png" alt="gold" height={20} width={20} />
                <p>Since 2014</p>
              </motion.div>
            </div>

            {/* Left Line */}
            {/* Left Line with arrow touching edges */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "80vh" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }}
              className="absolute left-[33.5%] top-0 flex flex-col items-center z-10"
            >
              {/* vertical line */}
              <div className="w-[1px] bg-black/20 flex-1" />
              {/* arrow at the exact end */}
              <ArrowDown className="text-black/20 w-5 h-5" />
            </motion.div>

            {/* Right Line with arrow touching edges */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "82vh" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }}
              className="absolute right-[33.5%] bottom-0 flex flex-col items-center justify-end z-10"
            >
              <ArrowUp className="text-black/20 w-5 h-5 -space-y-3" />
              {/* vertical line */}
              <div className="w-[1px] bg-black/20 flex-1" />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* === Hero Reveal Panels === */}
      <AnimatePresence>
        {showHeroReveal && (
          <div className="fixed inset-0 flex z-[9998] pointer-events-none">
            {/* Left Panel */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[35%] h-full bg-white"
            />

            {/* Middle Panel with Arrows */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
              className="relative w-[30%] h-full bg-white origin-center overflow-visible"
            >
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: [0, -40, -35], opacity: [1, 1, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1/2 -left-4 -translate-y-1/2"
              >
              </motion.div>

              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: [0, 40, 35], opacity: [1, 1, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1/2 -right-4 -translate-y-1/2"
              >
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[35%] h-full bg-white"
            />

            {showCenterLine && (
              <motion.div
                initial={{ scaleX: 1, opacity: 1 }}
                animate={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 h-[2px] w-[25%] bg-white/50 origin-center -translate-x-1/2"
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
