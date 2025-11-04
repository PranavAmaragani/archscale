"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard() {
  const services = [
    {
      icon: "/pencil.svg",
      title: "Architectural Design",
      desc: "Full-service architectural planning for residential and commercial spaces.",
      img: "/architecture-hero.avif",
    },
    {
      icon: "/pencil.svg",
      title: "Interior Styling",
      desc: "Bespoke interior design solutions that enhance lifestyle and comfort.",
      img: "/architecture-hero.avif",
    },
    {
      icon: "/pencil.svg",
      title: "Construction Management",
      desc: "End-to-end project supervision ensuring quality, safety, and timely delivery.",
      img: "/architecture-hero.avif",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto flex flex-col gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-[#E4E0DA] flex flex-col md:flex-row md:justify-between md:gap-8 shadow-sm"
          >
            {/* Image - GOES ON TOP ON MOBILE */}
            <div className="flex-1 p-3 order-1 md:order-2">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full h-[180px] md:h-[350px]"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 order-2 md:order-1">
              <div className="flex flex-col justify-between h-full py-4 px-3 md:p-10">
                
                {/* Icon */}
                <div className="w-10 h-10 mb-6">
                  <Image src={service.icon} alt={service.title} width={35} height={35} />
                </div>

                <div>
                  <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1C1B1A] mb-3">
                    {service.title}
                  </h2>

                  <p className="text-[15px] md:text-[16px] text-[#595552] leading-relaxed mb-6 max-w-sm">
                    {service.desc}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 border border-[#D8D5D1] text-[#1C1B1A] bg-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[14px] md:text-[15px] font-medium hover:bg-[#F8F6F4] transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
