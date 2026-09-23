import React from 'react';
import { Award, Users, Mic, Presentation, CheckCircle, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Hackathons':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Leadership':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'Technical Showcases':
        return <Presentation className="w-5 h-5 text-emerald-400" />;
      case 'Communication':
        return <Mic className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-[#090d16] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Leadership</span>
          </div>
          <h2
            id="achievements-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Achievements
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Key participations, collegiate leadership roles, and technical speaking milestones earned through consistent effort and collaboration.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-blue-950/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getAchievementIcon(item.category)}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.highlight && (
                <div className="pt-3 border-t border-slate-800/70 flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
