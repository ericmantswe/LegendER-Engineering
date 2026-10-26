import React from 'react';
import { WHY_WORK_WITH_US, MISSION_VISION } from '../data/engineeringData';
import { FadeIn } from './FadeIn';

export const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-8 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              10 · PRINCIPLES
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              PRACTICAL ENGINEERING. MEANINGFUL RESULTS.
            </h2>
          </div>
        </FadeIn>

        {/* 4 Transparent Principle Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WHY_WORK_WITH_US.map((item, index) => (
            <FadeIn key={item.title} delay={index * 80}>
              <div
                className="bg-transparent border-t border-white/10 pt-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-1 mb-2 text-xs font-mono">
                    <span className="font-specimen text-2xl font-bold text-[#FF4015]">
                      0{index + 1}
                    </span>
                    <span className="font-bold text-slate-400 uppercase text-[9px]">
                      {item.pillar}
                    </span>
                  </div>

                  <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-white mb-1 leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-300 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mission and Vision Posters - Transparent with hairline borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <FadeIn delay={100}>
            <div className="bg-transparent border border-white/15 p-6 flex flex-col justify-between h-full">
              <div className="text-[9px] font-mono font-black uppercase text-[#FF4015] mb-2">
                MISSION
              </div>
              <p className="font-condensed text-xl font-bold uppercase tracking-wide leading-relaxed text-white">
                "{MISSION_VISION.mission}"
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn delay={200}>
            <div className="bg-transparent border border-white/15 p-6 flex flex-col justify-between h-full">
              <div className="text-[9px] font-mono font-bold uppercase text-slate-400 mb-2">
                VISION
              </div>
              <p className="font-condensed text-xl font-bold uppercase tracking-wide leading-relaxed text-slate-200">
                "{MISSION_VISION.vision}"
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
