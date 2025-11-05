import Image from "next/image";
export const Footer=()=> {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Logo + Address */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Image src="/archscale_logo.svg" alt="logo" height={200} width={200}/>
          </div>

          <p className="mt-8 text-gray-400 text-sm uppercase tracking-wide">
            Address
          </p>
          <p className="mt-2 text-lg md:text-[32px] leading-[1.2] max-w-[400px]">
            123 Wonder Design
            Avenue, San Diego,
            CA
          </p>

          {/* Email input */}
          <p className="mt-8 mb-4 text-gray-400 text-[16px] font-medium uppercase">Enter Your Email</p>
          <div className="flex items-center bg-[#111] rounded-full p-2 border border-white/10 shadow-inner w-[400px]">
            <input
              type="email"
              placeholder="hello@example.com"
              className="bg-transparent flex-1 px-4 py-2 text-sm focus:outline-none"
            />
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Join Us
            </button>
          </div>
          <p className="mt-4 text-[16px] text-gray-500 max-w-[450px] font-medium">
            * By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
          </p>
        </div>

        {/* Main Pages */}
        <div>
          <h3 className="font-medium text-sm mb-4">Main Pages</h3>
          <ul className="space-y-2 text-sm md:text-[20px] text-gray-300">
            <li>Home (A)</li>
            <li>Home (B)</li>
            <li>Home (C)</li>
            <li>Projects (A)</li>
            <li>Projects (B)</li>
            <li>Projects (C)</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-medium text-sm md:text-[20px] mb-4">Company</h3>
          <ul className="space-y-2 text-sm md:text-[20px] text-gray-300">
            <li>About</li>
            <li>Services</li>
            <li>Services Details</li>
            <li>Blog</li>
            <li>Blog Article</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact & Utility */}
        <div>
          <h3 className="font-medium text-sm mb-4">Contact & Utility</h3>
          <ul className="space-y-2 text-sm md:text-[20px] text-gray-300">
            <li>Contact (A)</li>
            <li>Contact (B)</li>
            <li>Contact (C)</li>
            <li>404</li>
            <li>Password</li>
          </ul>
        </div>
      </div>

      {/* Bottom Select */}
      
    </footer>
  );
}
