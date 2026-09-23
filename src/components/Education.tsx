import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#070b12] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2
            id="education-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My formal engineering and secondary academic qualifications, building a strong base in mathematics, computing, and analytical problem-solving.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
                edu.current
                  ? 'bg-gradient-to-r from-[#0c1629] to-[#0b101c] border-blue-900/60 shadow-lg shadow-blue-950/20'
                  : 'bg-[#0b101c] border-slate-800/90'
              }`}
            >
              {edu.current && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                  In Progress
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-1">
                    {edu.field}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span>&bull;</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-block px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block -mb-0.5">{edu.scoreType}</span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
