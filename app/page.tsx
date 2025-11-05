"use client";

import { Hero } from "./components/Hero";
import { Middle } from "./components/Middle";

import Preloader from "./components/Animations";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import {CreatorSection} from "./components/CreatorSection";
import { Testimonials } from "./components/Testimonials";
import { FAQSection } from "./components/FAQSection";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef, // tracking scroll inside this
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  

  return (
    // ✅ attach ref here
    <div>
     <Preloader/>
    <div ref={containerRef} className="flex flex-col">
      <motion.div
        style={{ y}}
        className="sticky top-0 h-screen w-full"
      >
        <Hero />
      </motion.div>

      <div className="relative z-20">
        <Middle />
      </div>
      <div className="relative z-30">
         <Services/>
      </div>
      <div className="relative z-30">
         <Work/>
      </div>
      <div className="relative z-30">
         <CreatorSection/>
      </div>
      <div className="relative z-30">
         <Testimonials/>
      </div>
      <div className="relative z-30">
         <FAQSection/>
      </div>
      <div className="relative z-30">
         <Book/>
      </div>
      <div className="relative z-30">
         <Footer/>
      </div>
     
      
    </div>
    </div>
  );
}
