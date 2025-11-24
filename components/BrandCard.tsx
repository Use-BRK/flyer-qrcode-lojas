import React from 'react';
import { Brand } from '../types';
import { ArrowRight } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const Icon = brand.icon;

  return (
    <a
      href={brand.url}
      className="
        group relative flex-1 min-w-0
        flex flex-col items-center justify-center
        p-2 md:p-8
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
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b ${brand.gradient} rounded-lg md:rounded-2xl`} />

      {/* Icon Section */}
      <div className="
        mb-2 md:mb-6 
        p-2 md:p-4 
        rounded-md md:rounded-xl 
        bg-zinc-950 border border-zinc-800 
        text-zinc-300 group-hover:text-white group-hover:border-zinc-500 
        transition-colors duration-300
      ">
        <Icon className="w-4 h-4 md:w-10 md:h-10" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-[10px] md:text-2xl font-bold text-white mb-1 md:mb-3 text-center leading-tight">
        {brand.name}
      </h3>
      
      {/* Description - Extremely compact on mobile */}
      <p className="text-[8px] md:text-sm text-zinc-400 leading-tight mb-2 md:mb-6 text-center line-clamp-2 md:line-clamp-none px-0.5 md:px-0 h-[2.5em] md:h-auto overflow-hidden">
        {brand.description}
      </p>

      {/* Call to Action Button */}
      <div className="
        mt-auto w-full 
        py-1.5 md:py-3 px-1 md:px-4 
        rounded md:rounded-lg 
        bg-white/5 border border-white/10 
        group-hover:bg-white group-hover:text-black 
        text-white text-[8px] md:text-sm font-semibold 
        transition-all duration-300 
        flex items-center justify-center gap-1 md:gap-2
      ">
        <span>Acessar</span>
        <ArrowRight className="w-2 h-2 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </a>
  );
};

export default BrandCard;