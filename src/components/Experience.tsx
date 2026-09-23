import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Trophy, Sparkles, Building2, Train, HeartPulse, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return <Train className="w-5 h-5 text-indigo-400" />;
      case 'AI Event':
        return <HeartPulse className="w-5 h-5 text-sky-400" />;
      case 'Workshop':
        return <Terminal className="w-5 h-5 text-pink-400" />;
      case 'Promptathon':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Entrepreneurship':
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#070b12] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Collegiate & National Engagement</span>
          </div>
          <h2
            id="experience-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Experience & Participation
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent timeline of hackathons, AI design sprints, and collegiate technical initiatives where I led teams and shipped working prototypes.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500/40 via-slate-700/40 to-slate-800/10 hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  id={`experience-item-${item.id}`}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b1220] border-2 border-blue-500/80 items-center justify-center shadow-md shadow-blue-500/20 z-10">
                    {getEventIcon(item.type)}
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-slate-700 transition-all shadow-lg hover:shadow-blue-950/20">
                      {/* Event & Period Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-900/50">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.event}
                      </h3>

                      {/* Role & Project */}
                      <div className="text-xs font-semibold text-slate-300 mb-2">
                        <span className="text-slate-400 font-normal">Role:</span> {item.role}
                      </div>

                      <div className="text-xs font-medium text-sky-400/90 bg-sky-950/30 p-2.5 rounded-lg border border-sky-900/40 mb-3.5">
                        <span className="text-slate-300 font-semibold block text-[11px] mb-0.5">Focus Project:</span>
                        {item.project}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#101726] border border-slate-800 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Factual Integrity Statement */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
            * All participation records reflect academic competitions, developer events, and student hackathons.
          </p>
        </div>
      </div>
    </section>
  );
};
