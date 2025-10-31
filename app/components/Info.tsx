export const Info = () => {
  const stats = [
    { value: "50+", label: "Project Completed" },
    { value: "100+", label: "Expert Teams" },
    { value: "$3.5M", label: "Average Value" },
    { value: "$49.9M", label: "Highest Value" },
  ];

  return (
    <section className="w-full border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">

        {/* wrapper line on left for mobile */}
        <div className="border-l border-black/20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="
                  flex flex-row justify-around md:gap-0 md:flex-col md:justify-center
                  sm: py-14 md:py-14 pl-6      
                  border-b border-black/10 
                  md:border-b-0 
                  md:border-r md:border-black/10
                  last:border-b-0 
                  last:md:border-r-0 
                  text-left md:text-center
                "
              >
                <span className="text-3xl md:text-4xl font-medium text-black">
                  {stat.value}
                </span>
                <span className="text-sm text-black/60 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
