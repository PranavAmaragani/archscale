"use client";

import Link from "next/link";

export const Menu = ({ scrolled }: { scrolled: boolean }) => {
  const menu = [
    {
      title: "Main Pages",
      items: ["Home (A)", "Home (B)", "Home (C)"],
    },
    {
      title: "Contact Pages",
      items: ["Contact (A)", "Contact (B)", "Contact (C)"],
    },
    {
      title: "Project Pages",
      items: ["Projects (A)", "Projects (B)", "Projects (C)", "Projects Article"],
    },
    {
      title: "Pages",
      items: ["About", "Services", "Service Details", "Blog", "Blog Article"],
    },
    {
      title: "Template",
      items: ["Licenses", "Style Guide", "Privacy Policy", "404", "401"],
    },
  ];

  return (
    <div
      className={`w-full flex items-center justify-center pt-10 pb-30 backdrop-blur-2xl
        ${scrolled ? "bg-[#EEEDEA]/80 text-black" : "bg-black/30 text-white"}
      `}
    >
      <div className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-10
        ${scrolled ? "text-black" : "text-white"}
      `}>
        {menu.map((section, i) => (
          <div key={i} className="space-y-3">
            <h4 className={`text-sm font-semibold opacity-80 
              ${scrolled ? "text-black" : "text-white"}
            `}>
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className={`font-medium transition-opacity
                      ${scrolled ? "text-black hover:opacity-60" : "text-white hover:opacity-70"}
                    `}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
