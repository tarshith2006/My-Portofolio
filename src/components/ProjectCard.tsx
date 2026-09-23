import React from 'react';
import { Github, ExternalLink, Activity, Train, Briefcase, Terminal, Sparkles, ArrowRight, Trophy, Gavel } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getProjectVisual = (id: string) => {
    switch (id) {
      case 'careroute':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#0c1c38] to-[#091122] flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Subtle radar circular rings */}
            <div className="absolute w-32 h-32 rounded-full border border-sky-500/20 animate-ping opacity-25" />
            <div className="absolute w-24 h-24 rounded-full border border-sky-500/30" />
            <div className="absolute w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
              <Activity className="w-6 h-6 text-sky-400" />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#080d1a]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-sky-500/30 text-[11px] font-mono text-sky-300">
              Healthcare &bull; Geolocation
            </div>
          </div>
        );
      case 'railway-block-planning':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#131438] to-[#090b22] flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Railway tracks abstract grid */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Train className="w-7 h-7 text-indigo-400" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-[#080d1a]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-indigo-500/30 text-[11px] font-mono text-indigo-300">
              Indian Railways &bull; SIH
            </div>
          </div>
        );
      case 'ipl-auction-simulator':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#291705] to-[#120a02] flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:14px_14px]" />
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#080d1a]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-amber-500/30 text-[11px] font-mono text-amber-300">
              IPL Auction &bull; AI Bidders
            </div>
          </div>
        );
      case 'msme-business-assistant':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#0c2420] to-[#081513] flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Briefcase className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#080d1a]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              MSME &bull; Digital Tools
            </div>
          </div>
        );
      case 'code-intelligence-agent':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#240c24] to-[#140817] flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Terminal className="w-7 h-7 text-pink-400" />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#080d1a]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-pink-500/30 text-[11px] font-mono text-pink-300">
              LLM &bull; Syntax Agent
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id={`project-card-${project.id}`}
      className="group rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-blue-950/20 hover:-translate-y-1"
    >
      <div>
        {/* Project Image/Visual Header */}
        <div className="border-b border-slate-800/80 overflow-hidden">
          {getProjectVisual(project.id)}
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {project.category}
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
              Featured Prototype
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1.5">
            {project.name}
          </h3>

          <p className="text-xs font-semibold text-blue-400 mb-3 line-clamp-1 italic">
            "{project.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#101726] border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded text-[11px] font-medium bg-[#101726] border border-slate-800 text-slate-400">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 border-t border-slate-800/60 mt-2 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          id={`view-project-btn-${project.id}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white font-medium text-xs shadow-sm shadow-blue-600/20 transition-all group-hover:shadow-blue-600/30"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </button>

        <a
          id={`github-link-${project.id}`}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors"
          title="Open GitHub Repository"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </div>
  );
};
