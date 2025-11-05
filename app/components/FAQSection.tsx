"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is Archscale easy to customize without coding?", a: "Yes, Archscale offers intuitive customization options and drag-and-drop features suitable for non-coders." },
  { q: "Can I use Archscale for projects outside of architecture?", a: "Absolutely — it's flexible enough for designers, agencies, interior studios, and creative portfolios." },
  { q: "Does the template include a CMS for portfolio projects?", a: "Yes, it includes a dynamic CMS setup for projects, case studies, and blogs." },
  { q: "Is Archscale optimized for mobile devices?", a: "Yes, Archscale is fully responsive and performs smoothly across devices." },
  { q: "Will this template help improve my site’s SEO?", a: "Yes — it includes SEO-friendly structure, clean markup, and performance optimization." },
];

export const FAQSection=()=> {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#eeece8] py-20 px-4 md:px-10 flex flex-col md:flex-row gap-14">
      {/* Left */}
      <div className="max-w-[450px]">
        
        {/* Label */}
        <span className="inline-flex items-center gap-2 bg-[#e5e3de] text-sm px-3 py-1.5 rounded-md font-medium mb-5">
          🌤 FAQ
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-6">
          Got <span className="italic">Questions?</span>
          We’ve Got Answers.
        </h2>

        {/* Sub-text */}
        <p className="text-gray-700 mb-8 leading-[1.4] tracking-tight">
          We understand that choosing the right template is an
          important decision. Below, you’ll find answers to some
          of the most common questions about Archscale.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
            Buy Template →
          </button>

          <button className="bg-white rounded-full px-6 py-3 text-sm font-medium border border-gray-300 flex items-center gap-2">
            Customize →
          </button>
        </div>
      </div>

      {/* Right / Accordion */}
      <div className="flex flex-col gap-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="bg-white rounded-full px-6 py-5 cursor-pointer flex flex-col transition-all border border-transparent hover:border-gray-200"
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900">{item.q}</p>
                <motion.div 
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm text-gray-600 mt-3 pb-2"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
