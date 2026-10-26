import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/engineeringData';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const EngineeringProcess: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <section id="process" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-8 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              07 · WORKFLOW
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              FROM CHALLENGE TO SOLUTION.
            </h2>
          </div>
        </FadeIn>

        {/* 6 Numerical Step Buttons - Transparent with Stagger */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <FadeIn key={step.number} delay={idx * 80}>
                <button
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`w-full p-3 text-left transition-colors cursor-pointer border-b ${
                    isSelected
                      ? 'bg-transparent text-white border-[#FF4015]'
                      : 'bg-transparent text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-specimen text-2xl font-bold ${
                        isSelected ? 'text-[#FF4015]' : 'text-slate-500'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase opacity-60">
                      STEP
                    </span>
                  </div>

                  <h3 className="font-condensed text-base sm:text-lg font-bold uppercase tracking-wide leading-tight mb-1 text-white">
                    {step.title}
                  </h3>

                  <p className="text-[10px] font-mono uppercase text-slate-400">
                    {step.summary}
                  </p>
                </button>
              </FadeIn>
            );
          })}
        </div>

        {/* Active Step Panel - Transparent with FadeIn */}
        <FadeIn delay={200}>
          <div className="bg-transparent border-t border-b border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase mb-1">
                PHASE {activeStep.number} · {activeStep.focus.toUpperCase()}
              </div>
              <h4 className="font-condensed text-2xl font-black uppercase text-white leading-none mb-2">
                {activeStep.title} — {activeStep.summary}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                <span className="text-slate-500 uppercase">Deliverables:</span>
                {activeStep.deliverables.map((del) => (
                  <span key={del} className="text-white font-medium">
                    {del}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                disabled={selectedStepIndex === 0}
                onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1 font-mono text-xs font-bold uppercase bg-transparent text-white border border-white/20 hover:border-white disabled:opacity-30 cursor-pointer"
              >
                ← Prev
              </button>
              <span className="text-xs font-mono text-slate-500">
                {selectedStepIndex + 1}/{PROCESS_STEPS.length}
              </span>
              <button
                disabled={selectedStepIndex === PROCESS_STEPS.length - 1}
                onClick={() =>
                  setSelectedStepIndex((prev) =>
                    Math.min(PROCESS_STEPS.length - 1, prev + 1)
                  )
                }
                className="px-3 py-1 font-mono text-xs font-bold uppercase bg-transparent text-[#FF4015] border border-[#FF4015] hover:bg-[#FF4015] hover:text-[#121214] disabled:opacity-30 cursor-pointer inline-flex items-center gap-1 transition-colors"
              >
                Next
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
