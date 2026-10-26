import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceCategory } from '../types';
import { FadeIn } from './FadeIn';

interface DiagnosticProps {
  onSelectServiceAndProblem: (service: ServiceCategory, problemSummary: string) => void;
}

interface DiagnosisCase {
  id: string;
  industry: string;
  challenge: string;
  recommendedService: ServiceCategory;
  technologyTrack: string;
  expectedOutcome: string;
}

const DIAGNOSTIC_CASES: DiagnosisCase[] = [
  {
    id: 'case-packaging-jam',
    industry: 'PACKAGING',
    challenge: 'Manual indexing and lack of automatic jam stops',
    recommendedService: 'Industrial Automation and Control',
    technologyTrack: 'PLC with Photoelectric Sensors & E-Stop',
    expectedOutcome: 'Automated indexing, repeatable timing, operator safety',
  },
  {
    id: 'case-paper-logs',
    industry: 'OPERATIONS',
    challenge: 'Paper shift logs causing unmonitored machine downtime',
    recommendedService: 'Software and Web Application Development',
    technologyTrack: 'Web Telemetry Dashboard & Shift Logs',
    expectedOutcome: 'Live downtime tracking and tabular shift summaries',
  },
  {
    id: 'case-custom-sensing',
    industry: 'SENSING',
    challenge: 'Need dedicated physical sensor logging without subscriptions',
    recommendedService: 'Electronics and Embedded Systems',
    technologyTrack: 'Microchip PIC PCB with I2C/SPI Sensor Nodes',
    expectedOutcome: 'Standalone low-power data logger with local telemetry',
  },
  {
    id: 'case-mechanical-prototype',
    industry: 'TOOLING',
    challenge: 'Need custom brackets or grippers made to tight tolerances',
    recommendedService: 'Mechanical Design and Product Development',
    technologyTrack: 'Autodesk Fusion 360 CAD & DFM Tolerancing',
    expectedOutcome: 'Validated 3D CAD models, stress analysis, prototype parts',
  },
  {
    id: 'case-equipment-coordination',
    industry: 'INTEGRATION',
    challenge: 'Machines, drives, and computers working without coordination',
    recommendedService: 'Engineering System Integration',
    technologyTrack: 'Unified Hardware–Software Bus & Fieldbus',
    expectedOutcome: 'Synchronized sequencing with centralized operator alarms',
  },
];

export const EngineeringDiagnostic: React.FC<DiagnosticProps> = ({
  onSelectServiceAndProblem,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(DIAGNOSTIC_CASES[0].id);
  const activeCase =
    DIAGNOSTIC_CASES.find((c) => c.id === selectedCaseId) || DIAGNOSTIC_CASES[0];

  return (
    <section className="py-20 bg-transparent text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="pb-3 mb-6 border-b border-white/10">
            <div className="text-[10px] font-mono text-[#FF4015] font-bold uppercase tracking-widest mb-0.5">
              09 · DIAGNOSTIC
            </div>
            <h2 className="font-condensed text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight">
              OPERATIONAL BOTTLENECK DIAGNOSTIC.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Challenge Selector - Transparent */}
          <div className="lg:col-span-5 space-y-2">
            <FadeIn delay={100}>
              <div className="space-y-2">
                {DIAGNOSTIC_CASES.map((diag) => {
                  const isSelected = diag.id === selectedCaseId;
                  return (
                    <button
                      key={diag.id}
                      onClick={() => setSelectedCaseId(diag.id)}
                      className={`w-full text-left p-3.5 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-transparent text-[#FF4015] border-[#FF4015]'
                          : 'bg-transparent border-white/10 text-white hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono font-bold uppercase mb-0.5">
                        <span>{diag.industry}</span>
                        {isSelected && <span>SELECTED ↗</span>}
                      </div>
                      <div className="font-condensed text-base font-bold uppercase tracking-wide leading-tight">
                        {diag.challenge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Assessment Output Card - Transparent */}
          <div className="lg:col-span-7 bg-transparent">
            <FadeIn delay={200}>
              <div className="bg-transparent border border-white/10 p-6 sm:p-8">
                <span className="text-[10px] font-mono text-[#FF4015] font-bold uppercase block mb-1">
                  RECOMMENDED SOLUTION
                </span>

                <h3 className="font-condensed text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-4 leading-tight">
                  {activeCase.recommendedService}
                </h3>

                <div className="space-y-3 mb-6 text-xs font-mono">
                  <div className="py-2 border-t border-b border-white/10">
                    <span className="text-slate-400 uppercase text-[9px] block mb-0.5">TECHNOLOGY:</span>
                    <span className="text-sm font-bold text-[#FF4015]">
                      {activeCase.technologyTrack}
                    </span>
                  </div>

                  <div className="py-1">
                    <span className="text-slate-400 uppercase text-[9px] block mb-0.5">OUTCOME:</span>
                    <span className="text-xs text-slate-200">
                      {activeCase.expectedOutcome}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onSelectServiceAndProblem(
                      activeCase.recommendedService,
                      `Problem: ${activeCase.challenge}\nTrack: ${activeCase.technologyTrack}`
                    )
                  }
                  className="w-full py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider bg-[#FF4015] hover:bg-[#E5360F] text-[#121214] transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Transfer into Enquiry
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
