import React from "react";
import { Brand } from "../types";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <a
      href={brand.url}
      className={`
        rounded-lg md:rounded-2xl
        bg-gradient-to-l
        ${
          brand.id === "agro"
            ? "from-[hsl(95,80%,37%)] via-[hsl(95,80%,20%)] to-[hsl(90,90%,1%)]"
            : ""
        }
        ${
          brand.id === "motors"
            ? "from-[hsl(18,90%,52%)] via-[hsl(18,90%,20%)] to-[hsl(18,90%,1%)]"
            : ""
        }
        ${
          brand.id === "fishing"
            ? "from-[hsl(214,90%,42%)] via-[hsl(214,90%,20%)] to-[hsl(214,90%,1%)]"
            : ""
        }
        group relative flex-1 min-w-0
        flex flex-row items-center justify-between
        py-1 md:p-8 gap-1 px-8
        transition-all duration-300 ease-out
        hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
        active:scale-[0.98]
        cursor-pointer
      `}
      role="button"
      aria-label={`Ir para ${brand.name}`}
    >
      {/* Subtle Gradient Background on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b ${brand.gradient} rounded-lg md:rounded-2xl`}
      />

      <div className="flex items-center justify-center gap-12">
        {/* Logo Image Section */}
        <div
          className=" 
        p-2 md:p-4 
        rounded-md md:rounded-xl 
        transition-colors duration-300
      "
        >
          <img className="w-[6rem]" src={brand.imgLoja} alt="" />
        </div>

        <div className="flex flex-col items-start justify-start max-w-[18ch] md:max-w-[24ch]">
          {/* Title */}
          <h3 className="text-[1.2rem] md:text-2xl font-bold text-white mb-1 md:mb-3 leading-tight">
            {brand.name}
          </h3>

          {/* Description - Extremely compact on mobile */}
          <p className="text-[.75rem] md:text-sm text-white/90 leading-tight mb-2 md:mb-6 line-clamp-2 md:line-clamp-none md:h-auto overflow-hidden">
            {brand.description}
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div
        className="w-[3rem] h-[3rem]
        rounded md:rounded-lg 
        bg-white/90 border border-white/10 
        group-hover:bg-white group-hover:text-black 
        text-white text-[8px] md:text-sm font-semibold 
        transition-all duration-300 
        flex items-center justify-center gap-1 md:gap-2
      "
      >
        <ArrowRight className="w-6 h-6 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-black -rotate-45" />
      </div>
    </a>
  );
};

export default BrandCard;
