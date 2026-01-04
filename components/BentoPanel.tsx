import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const BentoPanel: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col justify-between h-full w-full bg-white/5 p-8 rounded-[20px] relative overflow-hidden border border-white/10 group">
      
      {/* Decorative background blob for this specific panel */}
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-deep-violet/80 rounded-full blur-[60px] group-hover:bg-burnt-orange/20 transition-colors duration-700" />

      <div className="relative z-10 flex justify-between items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          <Star className="w-3 h-3 text-burnt-orange fill-burnt-orange" />
          <span className="text-xs font-bold text-white tracking-widest uppercase">Élite</span>
        </div>
        <ShieldCheck className="w-5 h-5 text-white/30" />
      </div>

      <div className="relative z-10 space-y-4">
        <blockquote className="font-serif italic text-2xl text-white/90 leading-relaxed">
          "Le design n'est pas seulement ce à quoi il ressemble. Le design est comment il fonctionne."
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-burnt-orange to-pink-500 p-[2px]">
            <img src="https://picsum.photos/100/100" alt="Avatar" className="w-full h-full rounded-full border border-black object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">Steve Jobs</span>
            <span className="text-[10px] text-white/50">Inspiration Visionnaire</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoPanel;