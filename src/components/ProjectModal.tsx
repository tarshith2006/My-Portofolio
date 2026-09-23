import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d1424] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="project-modal-close-btn"
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2.5 bg-blue-950/70 border border-blue-800/60 text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-blue-400 italic">
            "{project.tagline}"
          </p>
        </div>

        {/* Project Description */}
        <div className="space-y-4 mb-6">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6 bg-[#080d17] p-5 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Core Capabilities & Architecture</span>
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium bg-[#131d30] border border-slate-700/60 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Demo Status Banner */}
        <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs flex items-center gap-3 mb-6">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            <strong>Deployment Note:</strong> Live interactive production preview is currently deployed in select testing environments. Repository source and architecture are open on GitHub.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>

          <button
            onClick={() => {
              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Explore Repository</span>
          </button>
        </div>
      </div>
    </div>
  );
};
