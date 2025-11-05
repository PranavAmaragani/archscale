"use client";
import { useRef } from "react";
import {TestimonialsSlider} from "./TestimonialsSlider";

export const Testimonials=()=>{
  const sliderControls = useRef<any>(null);

  return (
    <section className="w-full bg-[#eeece8] py-16 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="inline-flex items-center gap-2 bg-[#e5e3de] text-sm px-4 py-1.5 rounded-md font-medium mb-4">
            👥 Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-snug">
            Templates <span className="italic">Trusted By Creatives</span><br />
            Around The World
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow"
            onClick={() => sliderControls.current.prev()}
          >
            ‹
          </button>
          <button
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow"
            onClick={() => sliderControls.current.next()}
          >
            ›
          </button>
        </div>
      </div>

      <TestimonialsSlider controls={sliderControls} />
    </section>
  );
}
