"use client";
import Image from "next/image";
import Link from "next/link";

export const CreatorSection=()=> {
  return (
    <section className="bg-[#EEEDEA] px-4 md:px-10 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0E0E0E] text-[#eeedea] rounded-3xl p-8 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20">

          {/* Left */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2A2A2A] text-white text-sm font-medium py-1 px-3 rounded-lg mb-6">
              <Image src="/pencil.svg" alt="creator-icon" width={18} height={18} />
              <span>From The Creator</span>
            </div>

            {/* Main text */}
            <h2 className="text-[26px] md:text-[32px] leading-[1.1] font-medium tracking-tight">
              Archscale was crafted to strike the right balance between aesthetic minimalism and practical structure. As a designer, I know how important it is to have a portfolio that not only looks beautiful but also works seamlessly.
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between items-center h-full">
            <div className="flex flex-col items-center">
                <p className="text-[#bdbdbd] text-[15px] md:text-[16px] leading-[1.5] mb-6">
              Every section, interaction, and layout choice was made to help you present your work with confidence — and customize it without friction.
            </p>

            <Link
              href="#"
              className="px-6 py-3 rounded-full border border-[#4A4A4A] text-white text-[15px] font-medium flex items-center gap-2 hover:bg-white/10 transition self-start"
            >
              Buy Template →
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
