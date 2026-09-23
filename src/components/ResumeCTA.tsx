import React from 'react';
import { FileText, Download, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-16 bg-[#070b12] border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0e172a] via-[#0f1b33] to-[#090d16] border border-blue-900/40 p-8 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Decorative ambient flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Profile Overview</span>
            </div>

            <h2
              id="resume-cta-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3"
            >
              Want to know more about me?
            </h2>

            <p
              id="resume-cta-desc"
              className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6"
            >
              Download my resume to explore my education, skills, projects, achievements, and experience.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Updated with SIH & CareRoute
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Print-ready / PDF friendly
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              id="resume-cta-view-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenResume}
              id="resume-cta-preview-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Web Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
