import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="flex items-center justify-between text-[10px] font-mono pb-2 mb-8 border-b border-white/10 uppercase text-slate-400">
            <span className="font-bold text-[#FF4015]">03 · ABOUT</span>
            <span>BOTSWANA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Essential Core Statements */}
            <div className="lg:col-span-7 bg-transparent">
              <h2 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-[1.12] mb-6">
                ENGINEERING MEETS BUSINESS.
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-200 font-semibold leading-relaxed mb-6">
                We engineer practical automation, embedded electronics, and mechanical CAD systems that solve operational problems and deliver measurable business return.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="bg-transparent border-transparent">
                  <span className="text-[10px] font-mono font-bold text-[#FF4015] block uppercase mb-1">
                    PROCESS-FIRST
                  </span>
                  <span className="text-xs text-slate-300 font-normal">
                    Shop-floor reality before writing code.
                  </span>
                </div>

                <div className="bg-transparent border-transparent">
                  <span className="text-[10px] font-mono font-bold text-[#FF4015] block uppercase mb-1">
                    FULL INTEGRATION
                  </span>
                  <span className="text-xs text-slate-300 font-normal">
                    Sensors, controllers & mechanical parts.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Workstation Visual */}
            <div className="lg:col-span-5 bg-transparent">
              <div className="relative overflow-hidden bg-transparent border-transparent">
                <img
                  src="/src/assets/images/about_engineering_design_1792416356440.jpg"
                  alt="CAD Prototyping"
                  referrerPolicy="no-referrer"
                  className="w-full h-[240px] sm:h-[280px] object-cover"
                />
                <div className="pt-2 flex justify-between text-[10px] font-mono text-slate-400">
                  <span className="font-bold uppercase text-white">FUSION 360 WORKBENCH</span>
                  <span className="text-[#FF4015]">DFM ACCURACY</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
