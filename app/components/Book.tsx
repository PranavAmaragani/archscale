"use client";
import React from "react";
import Image from "next/image";

export const Book=()=> {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/book.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay dark tint */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
          <Image src="/handshake.svg" alt="handshake" height={20} width={20}/>
          <p>Launch Faster</p>L
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight">
          Ready to build <br />
          <span className="italic font-serif font-normal">
            remarkable
          </span>{" "}
          website?
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90">
            Buy Template →
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent border border-white font-medium hover:bg-white/10">
            Customize →
          </button>
        </div>
      </div>
    </section>
  );
}
