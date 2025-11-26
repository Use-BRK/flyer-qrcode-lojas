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
      className="
        group relative flex-1 min-w-0
        flex flex-row items-center justify-between
        p-3 md:p-8 gap-4 pr-6
        bg-zinc-900/40 border border-zinc-800 rounded-lg md:rounded-2xl
        transition-all duration-300 ease-out
        hover:border-zinc-500 hover:bg-zinc-900
        hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
        active:scale-[0.98]
        cursor-pointer
      "
      role="button"
      aria-label={`Ir para ${brand.name}`}
    >
      {/* Subtle Gradient Background on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b ${brand.gradient} rounded-lg md:rounded-2xl`}
      />

      {/* Logo Image Section */}
      <div
        className=" 
        p-2 md:p-4 
        rounded-md md:rounded-xl 
        bg-zinc-950 border border-zinc-800 
        text-zinc-300 group-hover:text-white group-hover:border-zinc-500 
        transition-colors duration-300
      "
      >
        <img className="w-[4rem]" src={brand.imgLoja} alt="" />
      </div>

      <div className="flex flex-col items-start justify-start max-w-[12ch] md:max-w-[24ch]">
        {/* Title */}
        <h3 className="text-[.875rem] md:text-2xl font-bold text-white mb-1 md:mb-3 leading-tight">
          {brand.name}
        </h3>

        {/* Description - Extremely compact on mobile */}
        <p className="text-[.75rem] md:text-sm text-zinc-400 leading-tight mb-2 md:mb-6 line-clamp-2 md:line-clamp-none h-[2.5em] md:h-auto overflow-hidden">
          {brand.description}
        </p>
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
