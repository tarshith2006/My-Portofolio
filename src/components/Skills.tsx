import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Cpu,
  Wrench,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Server,
  BookOpen,
  Bot,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map((c) => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Agentic AI & Machine Learning':
      case 'AI & Modern Development':
        return <Bot className="w-5 h-5 text-pink-400" />;
      case 'Developer Tools & Platforms':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Computer Science & Core Foundations':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60';
      case 'Intermediate':
        return 'bg-blue-950/70 text-blue-300 border-blue-800/60';
      case 'Familiar':
        return 'bg-purple-950/70 text-purple-300 border-purple-800/60';
      case 'Learning':
        return 'bg-amber-950/70 text-amber-300 border-amber-800/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#070b12] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2
            id="skills-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent overview of the programming languages, web stacks, developer tools, and foundational concepts I practice and apply.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#0b101c] rounded-2xl border border-slate-800/80 p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <span className="text-xs text-slate-400">
                    {category.skills.length} core technologies
                  </span>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#0e1628] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group hover:shadow-lg hover:shadow-black/20"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Competency</span>
                      <span className="text-slate-300 font-mono text-[10px]">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Growth Note */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/50 border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-blue-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Ongoing Exploration:</span> Deepening full-stack backend development, graph algorithms, and production LLM orchestration.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated Sept 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
