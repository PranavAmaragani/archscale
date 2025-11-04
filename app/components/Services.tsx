"use client";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "./ServicesCard";

export const Services = () => {
  return (
    <section className="w-full bg-[#EEEDEA] pt-18 pb-10 px-6 md:px-12 border-y border-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D8D1CB] text-[#443F3D] text-sm font-medium py-1 px-3 rounded-lg mt-6">
          <Image src="/pencil.svg" alt="pencil" height={20} width={20} />
          <p className="text-[15px] md:text-[16px]">Services Overview</p>
        </div>

        {/* Top Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          {/* Left Title */}
          <div className="max-w-xl">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.15] font-medium text-[#1C1917]">
              Effective <span className="italic font-serif">Showcase</span><br className="hidden md:block" />
              Your Services
            </h1>
          </div>

          {/* Right Text & Buttons */}
          <div className="flex flex-col gap-6 md:pl-24 max-w-lg">

            <p className="text-[#3A3735] text-[16px] leading-[1.4]">
              Archscale helps you organize and present your services in a
              way that builds trust and encourages engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="px-7 py-3 rounded-full bg-[#3A2F2A] text-white text-[15px] font-medium flex items-center justify-center gap-2"
              >
                Buy Template →
              </Link>

              <Link
                href="#"
                className="px-7 py-3 rounded-full border border-[#C8C3BE] bg-white text-[#3A2F2A] text-[15px] font-medium flex items-center justify-center gap-2"
              >
                Customize →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-16">
        <ServiceCard />
      </div>
    </section>
  );
};
