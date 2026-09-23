import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Database, Bot, Globe, Code2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getCertVisual = (issuer: string) => {
    switch (issuer) {
      case 'NPTEL':
        return {
          icon: <Code2 className="w-5 h-5 text-amber-400" />,
          badge: 'bg-amber-950/60 border-amber-800/60 text-amber-300',
          borderHover: 'hover:border-amber-500/40',
        };
      case 'freeCodeCamp':
        return {
          icon: <Globe className="w-5 h-5 text-emerald-400" />,
          badge: 'bg-emerald-950/60 border-emerald-800/60 text-emerald-300',
          borderHover: 'hover:border-emerald-500/40',
        };
      case 'MSME':
        return {
          icon: <Bot className="w-5 h-5 text-indigo-400" />,
          badge: 'bg-indigo-950/60 border-indigo-800/60 text-indigo-300',
          borderHover: 'hover:border-indigo-500/40',
        };
      case 'SkilliLearn':
        return {
          icon: <Database className="w-5 h-5 text-sky-400" />,
          badge: 'bg-sky-950/60 border-sky-800/60 text-sky-300',
          borderHover: 'hover:border-sky-500/40',
        };
      default:
        return {
          icon: <Award className="w-5 h-5 text-blue-400" />,
          badge: 'bg-blue-950/60 border-blue-800/60 text-blue-300',
          borderHover: 'hover:border-blue-500/40',
        };
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#090d16] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Continuous Learning &amp; Credentials</span>
          </div>
          <h2
            id="certifications-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Verified Certifications
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Specialized accreditations in Agentic AI, modern web engineering, algorithmic Python, and NoSQL databases from recognized institutions and platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((cert) => {
            const visual = getCertVisual(cert.issuer);
            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className={`p-6 rounded-2xl bg-[#0b101c] border border-slate-800/90 ${visual.borderHover} transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-blue-950/20 hover:-translate-y-1 duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {visual.icon}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      {cert.date}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded-md border mb-2 ${visual.badge}`}>
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Covered Skills */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#101726] border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Status */}
                <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                  <span className="italic text-[11px] text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{cert.credentialNote}</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400/80" title="Active Credential" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
