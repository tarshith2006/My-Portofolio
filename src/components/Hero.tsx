import React, { useState } from 'react';
import {
  FileText,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
  Check,
  Copy,
  Code2,
  Play,
  RotateCcw,
  Bot,
  Layers,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

type TerminalTab = 'profile' | 'agent' | 'runner';

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<TerminalTab>('profile');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isRunningAgent, setIsRunningAgent] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([
    '> System initialized: Agentic Developer Environment ready.',
    '> Click "Run Agent Workflow" below to test autonomous execution loop.',
  ]);

  const profileSnippet = `class AgenticDeveloper:
    name = "Tarshith Bantupalli"
    status = "Undergraduate CSE Student"
    graduation = 2028
    location = "Visakhapatnam, India"
    cgpa = 7.78
    
    # Core specializations
    stack = ["Agentic AI", "Python", "React", "SIH Logistics"]
    
    def current_mission(self):
        return "Building autonomous & practical AI software"`;

  const agentSnippet = `from autonomous import Agent, ToolRegistry

agent = Agent(
    role="Full-Stack & Agentic AI Engineer",
    goal="Solve real-world healthcare & railway bottlenecks",
    tools=[
        ToolRegistry.geolocation_finder("CareRoute"),
        ToolRegistry.section_optimizer("Indian Railways SIH"),
        ToolRegistry.auction_simulator("IPL AI Bidders"),
        ToolRegistry.msme_assistant("SMB Schemes")
    ],
    reasoning_framework="Chain-of-Thought + Fast Prototyping"
)

# Autonomous decision loop
agent.observe_challenge()
agent.plan_and_execute()`;

  const handleCopyCode = () => {
    const textToCopy = activeTab === 'profile' ? profileSnippet : agentSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunAgent = () => {
    if (isRunningAgent) return;
    setIsRunningAgent(true);
    setAgentLogs([
      '⚡ [Agentic Loop] Bootstrapping autonomous agent...',
    ]);

    setTimeout(() => {
      setAgentLogs((prev) => [
        ...prev,
        '🔍 [Perception] Analyzing user problem statements (Healthcare / Logistics / MSME)...',
      ]);
    }, 450);

    setTimeout(() => {
      setAgentLogs((prev) => [
        ...prev,
        '⚙️ [Action: Tool Call] Selected Python algorithmic optimizer & React Vite UI.',
      ]);
    }, 950);

    setTimeout(() => {
      setAgentLogs((prev) => [
        ...prev,
        '🚀 [Output] CareRoute, Railway Planning & IPL Auction AI successfully architected!',
        '✅ [Status] Ready to engineer next-gen Agentic AI & Web solutions for your team.',
      ]);
      setIsRunningAgent(false);
    }, 1500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#080c15] via-[#0b101c] to-[#080c15] bg-tech-grid"
    >
      {/* Decorative ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-medium mb-6 shadow-sm shadow-blue-950/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Agentic AI, Full-Stack &amp; Tech Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Tarshith Bantupalli
              </span>
            </h1>

            {/* Supporting Heading */}
            <h2
              id="hero-supporting-heading"
              className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mb-4 flex items-center gap-2 flex-wrap"
            >
              <span>{personalInfo.supportingHeading}</span>
            </h2>

            {/* Focus Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-medium">
                <Bot className="w-3.5 h-3.5 text-blue-400" />
                Agentic AI Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-xs font-medium">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                Python Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-900/40 border border-sky-700/50 text-sky-300 text-xs font-medium">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                Modern Web &amp; React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                SIH Hackathon Lead
              </span>
            </div>

            {/* Location & Academic Meta */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                {personalInfo.location}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 font-mono">
                CGPA: 7.78
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-400">Class of 2028</span>
            </div>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              {personalInfo.description}
            </p>

            {/* Action CTAs: Primary, Secondary, Additional */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                id="hero-cta-projects"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Code2 className="w-4 h-4" />
                <span>Explore Featured Projects</span>
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View &amp; Print Resume</span>
              </button>

              {/* Additional CTA */}
              <button
                id="hero-cta-contact"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Direct Profiles:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  id="hero-social-github"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 hover:border-blue-500/50 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile (@tarshith2006)"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-blue-400 border border-slate-700/70 hover:border-blue-500/50 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile (tarshith-bantupalli)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-email"
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-sky-300 border border-slate-700/70 hover:border-blue-500/50 transition-all hover:scale-105"
                  aria-label="Send Email"
                  title={`Email ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer & Agent Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-developer-terminal"
              className="w-full max-w-lg rounded-2xl bg-[#0a0f1d] border border-slate-800 shadow-2xl shadow-blue-950/30 overflow-hidden transform transition-all duration-300 hover:border-slate-700"
            >
              {/* Window Title Bar & Tabs */}
              <div className="bg-[#0f1629] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Interactive File Tabs */}
                <div className="flex items-center gap-1 bg-[#090d18] p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
                      activeTab === 'profile'
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>profile.py</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('agent')}
                    className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
                      activeTab === 'agent'
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Bot className="w-3 h-3" />
                    <span>agent_loop.py</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('runner')}
                    className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 ${
                      activeTab === 'runner'
                        ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3 text-sky-400" />
                    <span>run_console</span>
                  </button>
                </div>

                {/* Copy or Actions */}
                {activeTab !== 'runner' && (
                  <button
                    onClick={handleCopyCode}
                    id="hero-terminal-copy-btn"
                    className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Copy code snippet"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed overflow-x-auto bg-[#070b14] min-h-[260px] flex flex-col justify-between">
                {activeTab === 'profile' && (
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="text-slate-600 select-none text-right flex flex-col gap-0.5">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                      <span>11</span>
                    </div>

                    {/* Code contents */}
                    <div className="flex flex-col gap-0.5 whitespace-pre">
                      <p>
                        <span className="text-pink-400 font-semibold">class</span>{' '}
                        <span className="text-amber-300 font-semibold">AgenticDeveloper</span>:
                      </p>
                      <p>
                        {'    '}name = <span className="text-emerald-300">"Tarshith Bantupalli"</span>
                      </p>
                      <p>
                        {'    '}role = <span className="text-emerald-300">"CSE &amp; Agentic AI Dev"</span>
                      </p>
                      <p>
                        {'    '}cgpa = <span className="text-sky-300 font-medium">7.78</span>{' '}
                        <span className="text-slate-500"># Class of 2028</span>
                      </p>
                      <p>
                        {'    '}stack = [<span className="text-amber-300">"Agentic AI"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React"</span>]
                      </p>
                      <p>
                        {'    '}location = <span className="text-emerald-300">"Visakhapatnam, India"</span>
                      </p>
                      <p className="text-slate-500">{'    '}# Featured implementations</p>
                      <p>
                        {'    '}works = [<span className="text-sky-300">"CareRoute"</span>, <span className="text-sky-300">"Railway Planning"</span>]
                      </p>
                      <p>
                        <span className="text-blue-400">&gt;&gt;&gt;</span>{' '}
                        <span className="text-slate-200 font-semibold">Tarshith.ready_to_build()</span>
                        <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse" />
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'agent' && (
                  <div className="flex gap-4">
                    <div className="text-slate-600 select-none text-right flex flex-col gap-0.5">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                      <span>11</span>
                    </div>

                    <div className="flex flex-col gap-0.5 whitespace-pre">
                      <p>
                        <span className="text-pink-400 font-semibold">from</span> agentic{' '}
                        <span className="text-pink-400 font-semibold">import</span>{' '}
                        <span className="text-amber-300">AutonomousAgent</span>
                      </p>
                      <p>
                        agent = <span className="text-amber-300">AutonomousAgent</span>(
                      </p>
                      <p>
                        {'    '}focus=<span className="text-emerald-300">"Healthcare &amp; Railway Logistics"</span>,
                      </p>
                      <p>
                        {'    '}tools=[<span className="text-sky-300">"CareRouteGeo"</span>, <span className="text-sky-300">"RailwayScheduler"</span>],
                      </p>
                      <p>
                        {'    '}framework=<span className="text-amber-300">"ChainOfThought + Python"</span>
                      </p>
                      <p>)</p>
                      <p className="text-slate-500"># Continuous autonomous evaluation</p>
                      <p>
                        agent.<span className="text-blue-400">solve_complex_challenge</span>()
                      </p>
                      <p className="text-emerald-400"># Status: Solved with optimal heuristics</p>
                    </div>
                  </div>
                )}

                {activeTab === 'runner' && (
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-1.5 text-xs font-mono">
                      {agentLogs.map((log, index) => (
                        <div
                          key={index}
                          className={`${
                            log.startsWith('🚀') || log.startsWith('✅')
                              ? 'text-emerald-300 font-semibold'
                              : log.startsWith('⚡')
                              ? 'text-amber-300'
                              : 'text-slate-300'
                          }`}
                        >
                          {log}
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={handleRunAgent}
                        disabled={isRunningAgent}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 text-white font-medium text-xs transition-colors cursor-pointer"
                      >
                        {isRunningAgent ? (
                          <>
                            <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                            <span>Executing Agent...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Run Agent Workflow</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() =>
                          setAgentLogs([
                            '> Terminal console reset.',
                            '> Ready to execute autonomous workflow test.',
                          ])
                        }
                        className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Summary */}
              <div className="px-5 py-3 bg-[#0d1424] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-slate-300 font-medium">Smart India Hackathon Participant</span>
                </div>
                <span className="text-blue-400 font-mono text-[11px]">
                  Agentic AI &bull; Python &bull; React
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-14 lg:mt-20 flex justify-center">
          <button
            id="hero-scroll-down-btn"
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to About Me section"
          >
            <span className="tracking-widest uppercase text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">
              Explore Portfolio
            </span>
            <div className="w-7 h-10 rounded-full border border-slate-700 flex items-start justify-center p-1.5 group-hover:border-blue-500/60 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-blue-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
