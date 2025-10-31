"use client";

import Image from "next/image";
import { useEffect } from "react";

export const Author = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const inner = scroller.querySelector(".scroller__inner");
        if (!inner) return;

        const children = Array.from(inner.children);
        children.forEach((child) => {
          const clone = child.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          inner.appendChild(clone);
        });
      });
    }
  }, []);

  return (
    <div className="w-full flex overflow-hidden p-8 border-b-black">
      {/* ✅ Scroller container */}
      <div
        className="scroller"
        data-direction="left"
        data-speed="fast"
      >
        <div className="scroller__inner flex items-center gap-20">
          {/* 🔹 Loom & Ledger */}
          <div className="flex items-center gap-6">
            <Image
              src="/loom.svg"
              alt="Loom & Ledger"
              width={200}
              height={200}
              className="object-contain opacity-90"
            />
            <div className="h-6 w-px bg-[#c4c3c0]" />
          </div>

          {/* 🔹 Orbitale Net */}
          <div className="flex items-center gap-6">
            <Image
              src="/orbitale.svg"
              alt="Orbitale Net"
              width={200}
              height={200}
              className="object-contain opacity-90"
            />
            <div className="h-6 w-px bg-[#c4c3c0]" />
          </div>

          {/* 🔹 Crimson Bay */}
          <div className="flex items-center gap-6">
            <Image
              src="/crimson.svg"
              alt="Crimson Bay"
              width={200}
              height={200}
              className="object-contain opacity-90"
            />
            <div className="h-6 w-px bg-[#c4c3c0]" />
          </div>
        </div>
      </div>

      {/* ✅ Animation styles */}
      <style jsx>{`
        .scroller[data-animated="true"] {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller__inner {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
