"use client";
import Image from "next/image";
import Link from "next/link";

export const ProjectsGrid=()=>{
  const projects = [
    {
      img: "/architecture-hero.avif",
      title: "Ridgeway House, Retreat in the Hills",
    },
    {
      img: "/architecture-hero.avif",
      title: "Haven Co. Creative Office Headquarters",
    },
  ];

  return (
    <section className="bg-[#EEEDEA] py-20 md:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 md:gap-5">

        {/* 1/3 card */}
        <Link href="#" className="group block md:col-span-1">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={projects[0].img}
              alt={projects[0].title}
              width={900}
              height={700}
              className="rounded-2xl w-full h-[220px] md:h-[580px] object-cover transition-all duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1C1B1A] mt-4 flex items-center gap-2">
            {projects[0].title}
            <span className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition">
              →
            </span>
          </h3>
        </Link>

        {/* 2/3 card */}
        <Link href="#" className="group block md:col-span-2">
          <div className="overflow-hidden rounded-2xl mt-10">
            <Image
              src={projects[1].img}
              alt={projects[1].title}
              width={900}
              height={700}
              className="rounded-2xl w-full h-[220px] md:h-[520px] object-cover transition-all duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1C1B1A] mt-4 flex items-center gap-2">
            {projects[1].title}
            <span className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition">
              →
            </span>
          </h3>
        </Link>

      </div>
      <div className="flex justify-center items-center py-4 md:py-40">
        <div className="overflow-hidden rounded-2xl">
            <Image
              src={projects[0].img}
              alt={projects[0].title}
              width={900}
              height={700}
              className="rounded-2xl w-[880px] h-[220px] md:h-[580px] object-cover transition-all duration-700 group-hover:scale-[1.05]"
            />
          </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-5">

        {/* 1/3 card */}
        <Link href="#" className="group block md:col-span-2">
          <div className="overflow-hidden rounded-2xl mt-10">
            <Image
              src={projects[0].img}
              alt={projects[0].title}
              width={900}
              height={700}
              className="rounded-2xl w-full h-[220px] md:h-[520px] object-cover transition-all duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1C1B1A] mt-4 flex items-center gap-2">
            {projects[0].title}
            <span className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition">
              →
            </span>
          </h3>
        </Link>

        {/* 2/3 card */}
        <Link href="#" className="group block md:col-span-1">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={projects[1].img}
              alt={projects[1].title}
              width={900}
              height={700}
              className="rounded-2xl w-full h-[220px] md:h-[590px] object-cover transition-all duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1C1B1A] mt-4 flex items-center gap-2">
            {projects[1].title}
            <span className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition">
              →
            </span>
          </h3>
        </Link>

      </div>
    </section>
  );
}
