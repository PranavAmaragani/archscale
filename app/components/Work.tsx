"use client";
import Image from "next/image";
import Link from "next/link";
import {ProjectsGrid} from "./ProjectsGrid";

export const Work=()=>{
  return (
    <section className="w-full bg-[#EEEDEA] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center font-semibold">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D8D1CB] text-[#443F3D] text-sm font-medium py-2 px-3 mb-4 rounded-lg tracking-tighter">
          <Image src="/pencil.svg" alt="icon" width={18} height={18} />
          <span>Showcase Your Work</span>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] md:text-[64px] leading-[1.15] font-medium text-[#1C1917] mb-6">
          Present Your Projects <br />
          With <span className="italic font-serif">Clarity</span> and{" "}
          <span className="italic font-serif">Impact</span>
        </h1>

        {/* Description */}
        <p className="text-[#3A3735] text-[16px] leading-relaxed max-w-2xl mx-auto mb-10">
          Your work speaks volumes — Archscale gives it the platform it deserves.
          With a clean, image-focused layout and dynamic CMS integration.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="px-8 py-3 rounded-full bg-[#3A2F2A] text-white text-[15px] font-medium flex items-center gap-2"
          >
            Buy Template →
          </Link>

          <Link
            href="#"
            className="px-8 py-3 rounded-full border border-[#C8C3BE] bg-white text-[#3A2F2A] text-[15px] font-medium flex items-center gap-2"
          >
            Customize →
          </Link>
        </div>
      </div>
      <div>
        <ProjectsGrid/>
      </div>
    </section>
  );
}
