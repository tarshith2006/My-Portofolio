import React from 'react';
import {
  GraduationCap,
  Calendar,
  Layers,
  Trophy,
  CheckCircle2,
  Code,
  Sparkles,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-[#090d16] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Background & Perspective</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 leading-snug">
                Turning Computer Science concepts into practical software that makes a real-world impact.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {personalInfo.aboutMe}
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Currently pursuing my Bachelor of Technology in Computer Science and Engineering at Visakhapatnam, India. My hands-on focus centers on building responsive frontends, algorithmic Python tools, and human-centric AI workflows that tackle genuine friction points—from emergency healthcare routing in <span className="text-blue-400 font-medium">CareRoute</span> to operational section dispatching for <span className="text-indigo-400 font-medium">Indian Railways</span>.
              </p>

              {/* Highlights Chips */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Core Focus Areas & Attributes:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {personalInfo.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0e1626] border border-slate-800 text-slate-200 text-xs font-medium hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>View Complete Academic & Technical Credentials</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Statistics & Overview Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3.5">
              {/* Stat 1: CGPA */}
              <div
                id="stat-card-cgpa"
                className="p-5 rounded-xl bg-[#0c1322] border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div className="p-2.5 w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    7.78
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    Current CGPA
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    B.Tech in CSE Coursework
                  </div>
                </div>
              </div>

              {/* Stat 2: Graduation */}
              <div
                id="stat-card-grad"
                className="p-5 rounded-xl bg-[#0c1322] border border-slate-800/90 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div className="p-2.5 w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    2028
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    Graduation Year
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    4-Year Engineering Degree
                  </div>
                </div>
              </div>

              {/* Stat 3: Projects */}
              <div
                id="stat-card-projects"
                className="p-5 rounded-xl bg-[#0c1322] border border-slate-800/90 hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div className="p-2.5 w-10 h-10 rounded-lg bg-sky-950/60 border border-sky-800/50 flex items-center justify-center text-sky-400 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    5+
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    Active Projects
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Web, AI & Prototype Tools
                  </div>
                </div>
              </div>

              {/* Stat 4: Hackathons */}
              <div
                id="stat-card-hackathons"
                className="p-5 rounded-xl bg-[#0c1322] border border-slate-800/90 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div className="p-2.5 w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400 mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Multiple
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    Hackathons & Meets
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Smart India Hackathon & AI Events
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fact / Philosophy Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/30 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-normal">
                Believer in <strong className="text-white font-medium">pragmatic engineering</strong>: prioritizing working code, accessibility, clean architecture, and practical value over unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
