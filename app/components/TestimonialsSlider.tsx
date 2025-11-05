"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: "/p1.avif",
    text: "Archscale made it incredibly easy to create a professional portfolio that reflects the quality of our work.",
    name: "Thomas Tokachevic",
    role: "Architect at Form",
  },
  {
    img: "/p1.avif",
    text: "The layout is clean, intuitive, and beautifully responsive. Our site finally feels aligned with our brand.",
    name: "Carlos Mendez",
    role: "Founder of MZ",
  },
  {
    img: "/p1.avif",
    text: "This template gave me a huge head start. I launched my site in days — not weeks.",
    name: "Rina Davis",
    role: "Freelance Interior Designer",
  },
  {
    img: "/p1.avif",
    text: "The level of polish and attention to detail is unmatched. Worth every dollar.",
    name: "Ethan Brooks",
    role: "Creative Director",
  },
  {
    img: "/p1.avif",
    text: "Super easy to customize and looks absolutely premium. Highly recommended.",
    name: "Sofia Martinez",
    role: "Brand Designer",
  },
  {
    img: "/p1.avif",
    text: "Helped me deliver a high-end experience for a top client. Game changer.",
    name: "James Hunter",
    role: "UI/UX Consultant",
  },
];

export const TestimonialsSlider=({ controls }: { controls: any })=> {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < testimonials.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // expose controls to parent header buttons
  controls.current = { next, prev };

  return (
    <div className="overflow-hidden py-10">
      <motion.div
        className="flex flex-col md:flex-row  gap-6"
        animate={{ x: `-${index * (100 / 3)}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ width: `${(testimonials.length / 3) * 100}%` }}
      >
        {testimonials.map((t, i) => (
          <div
  key={i}
  className="w-full sm:w-[50%] lg:w-[33.33%] rounded-xl overflow-hidden relative h-[450px]"

>

            <Image
              src={t.img}
              fill
              alt={t.name}
              className="object-cover opacity-90"
            />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-lg md:text-[24px] font-medium tracking-tight leading-[1.1] mb-4">“{t.text}”</p>
              <p className="text-[16px] opacity-80">
                {t.name}, {t.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
