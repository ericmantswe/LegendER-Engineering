import React, { useState } from 'react';
import { PROJECTS } from '../data/engineeringData';
import { ProjectItem } from '../types';
import { ArrowUpRight, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ProjectsPortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inspectingProject, setInspectingProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryType === activeCategory);

  return (
    <section id="projects" className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-6 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              08 · PROTOTYPES
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              ENGINEERING IN ACTION.
            </h2>
          </div>

          {/* Filter Switcher */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-white/10 text-xs font-mono">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'automation', label: 'PLC' },
              { id: 'embedded', label: 'EMBEDDED' },
              { id: 'cad', label: 'CAD' },
              { id: 'software', label: 'WEB' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1 uppercase font-bold tracking-wider transition-colors cursor-pointer border ${
                  activeCategory === tab.id
                    ? 'bg-transparent text-[#FF4015] border-[#FF4015]'
                    : 'bg-transparent text-slate-400 border-transparent hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio 2x2 Grid - Transparent with Staggered FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 100}>
              <div
                className="bg-transparent border-transparent flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black mb-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-[#121214]/80 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-mono uppercase">
                      {project.outcomeStatus}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#FF4015] font-bold uppercase mb-0.5">
                    <span>{project.category}</span>
                    <span>REF. {`0${idx + 1}`}</span>
                  </div>

                  <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-white mb-2 leading-tight group-hover:text-[#FF4015] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-300 leading-relaxed mb-4">
                    <strong className="text-white font-mono uppercase text-[11px] mr-1">Solution:</strong>
                    {project.solution}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setInspectingProject(project)}
                    className="font-mono text-xs font-bold uppercase text-[#FF4015] hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    Specs
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onInquireProject(project.title)}
                    className="px-3 py-1 bg-transparent hover:bg-white/5 text-slate-200 hover:text-white border border-white/20 hover:border-[#FF4015] font-mono text-xs font-bold uppercase transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Modal for Technical Specifications */}
        {inspectingProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#18181C] border border-white/20 max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 pb-2 mb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#FF4015] font-bold uppercase">
                    {inspectingProject.category}
                  </span>
                  <h3 className="font-condensed text-2xl font-black uppercase text-white">
                    {inspectingProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setInspectingProject(null)}
                  className="p-1 text-slate-400 hover:text-white bg-transparent border-transparent cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[16/9] overflow-hidden bg-black mb-3">
                <img
                  src={inspectingProject.image}
                  alt={inspectingProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-xs font-mono mb-4">
                <div className="py-2 border-b border-white/10">
                  <span className="text-[#FF4015] font-bold block mb-0.5">OUTCOME:</span>
                  <p className="font-sans text-xs text-slate-200">{inspectingProject.outcomeDetails}</p>
                </div>

                <div className="py-2">
                  <span className="text-white font-bold block mb-1.5 uppercase">SPECIFICATIONS:</span>
                  <div className="grid grid-cols-2 gap-1 text-[11px]">
                    {Object.entries(inspectingProject.specifications).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-slate-500 block text-[9px]">{k}:</span>
                        <span className="text-white font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => setInspectingProject(null)}
                  className="px-3 py-1 font-mono text-xs font-bold uppercase bg-transparent text-slate-300 hover:text-white border border-white/20 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const t = inspectingProject.title;
                    setInspectingProject(null);
                    onInquireProject(t);
                  }}
                  className="px-3 py-1 font-mono text-xs font-bold uppercase bg-[#FF4015] text-[#121214] cursor-pointer"
                >
                  Discuss Build ↗
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
