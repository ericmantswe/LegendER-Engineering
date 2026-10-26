import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/engineeringData';
import { FadeIn } from './FadeIn';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="technology" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-6 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              06 · TECHNOLOGIES
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              PLATFORMS & TOOLCHAINS.
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 uppercase font-bold tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'all'
                  ? 'bg-transparent text-[#FF4015] border-[#FF4015]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-white'
              }`}
            >
              All
            </button>
            {TECHNOLOGIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 uppercase font-bold tracking-wider transition-colors cursor-pointer border ${
                  activeTab === cat.id
                    ? 'bg-transparent text-[#FF4015] border-[#FF4015]'
                    : 'bg-transparent text-slate-400 border-transparent hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Transparent Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((group, gIdx) => (
            <FadeIn key={group.id} delay={gIdx * 100}>
              <div
                className="bg-transparent border-b border-white/10 pb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-2 mb-4 gap-2">
                  <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {group.description}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-transparent py-2 border-t border-white/10"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4015]" />
                        <h4 className="font-mono text-xs font-bold text-white uppercase">
                          {tech.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
