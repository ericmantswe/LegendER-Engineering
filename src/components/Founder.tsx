import React from 'react';
import { FOUNDER_DATA } from '../data/engineeringData';
import { FadeIn } from './FadeIn';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="flex items-center justify-between text-[10px] font-mono pb-2 mb-8 border-b border-white/10 uppercase text-slate-400">
            <span className="font-bold text-[#FF4015]">04 · FOUNDER</span>
            <span>REPUBLIC OF BOTSWANA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-transparent">
            {/* Portrait */}
            <div className="lg:col-span-4 bg-transparent">
              <div className="relative aspect-square overflow-hidden bg-transparent border-transparent">
                <img
                  src="/src/assets/images/founder_eric_mantswe_1792416357017.jpg"
                  alt="Eric Obakeng Mantswe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <div className="font-condensed text-2xl font-black text-white uppercase">
                    {FOUNDER_DATA.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase">
                    BEng Mechatronics & Instrumentation
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="lg:col-span-8 flex flex-col justify-center bg-transparent">
              <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight mb-2">
                {FOUNDER_DATA.name}
              </h2>

              <div className="text-xs font-mono text-[#FF4015] font-bold mb-4 uppercase">
                Founder | Mechatronics & Industrial Instrumentation Engineering
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-4">
                Mechatronics engineer focused on solving operational problems through industrial automation, embedded hardware, and practical engineering design.
              </p>

              <p className="font-sans text-sm sm:text-base text-white font-bold mb-6 border-l-2 border-[#FF4015] pl-3 py-0.5">
                "{FOUNDER_DATA.quote}"
              </p>

              {/* Core Competencies (Transparent tags) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {FOUNDER_DATA.coreCompetencies.map((comp) => (
                  <div
                    key={comp}
                    className="py-1.5 border-b border-white/10 text-[11px] font-mono text-slate-300 flex items-center justify-between"
                  >
                    <span>{comp}</span>
                    <span className="text-[#FF4015] font-bold">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
