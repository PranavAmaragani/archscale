"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import MobileMenu from "./MobileMenu";

import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./Navlink";
import { NavDropdown } from "./NavDropdown";
import { Menu } from "./Menu";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };


  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src="/archscale-background.avif"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ✅ Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300
    ${scrolled ? "bg-[#EEEDEA] border-black/10  shadow-sm" : "bg-transparent border-white/20"}
  `}
      >


        <div
          className={`max-w-7xl mx-auto px-6 py-5 flex items-center transition-colors duration-300
  ${scrolled ? "text-black" : "text-white"}
  justify-between lg:justify-between md:justify-between
`}
        >


          <Image
            src="/paneluxeLogo.svg"
            alt="Archscale Logo"
             width={180}
            height={40}
            className={`${scrolled ? "brightness-0" : "brightness-0 invert"}`}
          />


          {/* ✅ Desktop Nav Links */}
          <ul
            className={`hidden lg:flex gap-10 text-[15px] font-semibold transition-colors duration-300 
${scrolled ? "text-black" : "text-white"}`}
          >
            <NavDropdown label="Menu" onOpen={openMega} onClose={closeMega} />
            <NavLink>About</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Case Studies</NavLink>
            <NavLink>Contact</NavLink>
          </ul>

          {/* ✅ Desktop Button */}
          {/* ✅ Right Section for md & lg */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Buy Template button (md & lg only) */}
            <button
              className={`hidden md:flex ml-2 py-3 px-6 bg-white text-black rounded-full text-[15px] font-semibold hover:bg-gray-100 transition`}
            >
              Buy Template →
            </button>

            {/* Hamburger (sm & md only) */}
            <div
              className="flex lg:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="flex flex-col gap-[5px]">
                <div className={`h-[2px] w-7 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-white"}`}></div>
                <div className={`h-[2px] w-7 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-white"}`}></div>
              </div>
            </div>

          </div>

        </div>

        {/* ✅ Mobile Dropdown */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} scrolled={scrolled} />



        {/* ✅ Animated Mega Menu (Slides Down) */}
        <AnimatePresence mode="wait">
          {megaOpen && (
            <motion.div
              key="wrapper"
              className={`absolute left-0 top-full w-full z-40 origin-top backdrop-blur-xl
  ${scrolled ? "bg-[#EEEDEA]" : "bg-black/10"}`}

              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                <Menu scrolled={scrolled} />

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      </nav>




      {/* ✅ Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4 translate-y-[18%]">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 text-sm">
          <Image src="/handshake.svg" alt="handshake" width={16} height={16} />
          <p className="text-white/90 font-medium">Webflow Template</p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-[64px] tracking-tighter leading-[1.1] font-semibold max-w-[600px]">
          Elevate your website with <span>Paneluxe</span>
        </h1>

        {/* Button */}
        <button className="mt-8 py-3 px-8 bg-white text-black rounded-full text-[16px] font-semibold flex items-center gap-2 hover:bg-gray-100 transition">
          Buy Template →
        </button>
      </div>
    </section>
  );
};
