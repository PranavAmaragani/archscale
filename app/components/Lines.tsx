import Image from "next/image";
export const Lines = () => {
    return (
        <section className="relative flex flex-col items-center justify-center  text-center px-4 py-45 overflow-hidden border border-x-0 border-y-black/20">

            {/* Lines Container */}

            <div className="md:hidden absolute inset-0 flex justify-between px-8">
                {/* left */}
                <div className="h-full border-r border-black/20 opacity-50"></div>

                {/* center */}
                <div className="h-full border-r border-black/20 opacity-50"></div>

                {/* right */}
                <div className="h-full border-r border-black/20 opacity-50"></div>
            </div>
            <div className="hidden md:block absolute inset-0 pointer-events-none">



                {/* Left fixed line (12px) */}
                <div className="absolute left-[40px] top-0 h-full border-r border-black/20 opacity-50"></div>

                {/* Right fixed line (12px) */}
                <div className="absolute right-[40px] top-0 h-full border-l border-black/20 opacity-50"></div>

                {/* Inner 6 lines */}
                {/* Inner 6 lines between left & right lines */}
                <div className="absolute left-[40px] right-[40px] top-0 h-full flex justify-between">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-full border-r border-black/20 opacity-50"
                        ></div>
                    ))}
                </div>

            </div>


            {/* Badge */}
            <div className="relative z-10 mb-5 px-4 py-2 bg-[#f7f4f2] border border-black/10 rounded-full text-sm flex items-center gap-2">


            <Image src="/home.svg" alt="home" height={20} width={20}/>
                <p> From The Author</p>
            </div>

            {/* Text */}
            <h1 className="relative z-10 max-w-[900px] text-2xl md:text-[32px] leading-[1.15] font-medium tracking-tight text-black">
                First impressions matter — especially in creative industries where your portfolio often speaks before you do. Archscale is built to help you make that impression count. With a minimal layout, seamless CMS integration, and responsive design.
            </h1>

            {/* Button */}
            <button className="relative z-10 mt-8 bg-black text-white text-sm md:text-base px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black/80 transition">
                Buy Template →
            </button>

        </section>
    );
}
