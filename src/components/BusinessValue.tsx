import React from 'react';
import { BUSINESS_VALUES } from '../data/engineeringData';
import { FadeIn } from './FadeIn';

export const BusinessValue: React.FC = () => {
  return (
    <section className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-10 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-1">
              02 · BUSINESS VALUE
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              ENGINEERING THAT MAKES BUSINESS BETTER.
            </h2>
          </div>
        </FadeIn>

        {/* 3 Transparent Columns with Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 bg-transparent border-transparent">
          {BUSINESS_VALUES.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 120}>
              <div className="bg-transparent border-transparent flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-white/10">
                    <span className="font-specimen text-4xl sm:text-5xl font-bold text-[#FF4015]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {item.focus}
                    </span>
                  </div>

                  <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
