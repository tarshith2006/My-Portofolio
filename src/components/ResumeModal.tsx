import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, MapPin, ExternalLink, Award, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  personalInfo,
  educationData,
  projectsData,
  experienceData,
  skillsData,
  certificationsData,
  participationCertificatesData,
  internshipOffersData,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `TARSHITH BANTUPALLI
Computer Science Engineering Undergraduate & Agentic AI Developer
Location: Visakhapatnam, Andhra Pradesh, India
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

============================================================
SUMMARY
============================================================
Computer Science Engineering undergraduate focused on Agentic AI workflows, Python systems, React development, and practical autonomous prototypes. Proven experience in hackathons (Smart India Hackathon) and building healthcare and railway operations prototypes.

============================================================
EDUCATION
============================================================
* Bachelor of Technology (B.Tech) - Computer Science and Engineering
  Expected Graduation: 2028 | Current CGPA: 7.78 / 10
  Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Python, Web Dev

* Intermediate (12th Grade) - MPC
  Score: 72% | Completed: 2024

* Secondary School Certificate (10th Grade)
  Score: 91.83% | Completed: 2022

============================================================
TECHNICAL SKILLS
============================================================
* Programming: Python, Java, C
* Web Development: HTML5, CSS3, JavaScript, React, Vite, Tailwind CSS
* AI & Tooling: Agentic AI, Prompt Engineering, Autonomous Loops, Vibe Coding, Git, GitHub, VS Code
* Databases: MongoDB, SQL, DBMS Foundations
* Core CS: Data Structures, Algorithms, Operating Systems, System Architecture

============================================================
CERTIFICATIONS & CREDENTIALS
============================================================
* The Joy of Computing using Python - NPTEL (2024)
  Focus: Python Programming, Algorithms & Logic, Data Structures, Computational Thinking
* Responsive Web Design - freeCodeCamp (2024)
  Focus: HTML5, Modern CSS3, Responsive Layouts, Flexbox, CSS Grid, Accessibility
* Agentic AI - MSME (2025)
  Focus: Agentic Workflows, Autonomous AI Systems, Tool Calling & Chaining, Prompt Engineering
* MongoDB - SkilliLearn (2025)
  Focus: MongoDB NoSQL, Document Modeling, Aggregation Framework, Database Querying

============================================================
FEATURED PROJECTS
============================================================
1. CareRoute - Emergency Healthcare Discovery
   Technologies: React, Vite, JavaScript, HTML, CSS, Browser Geolocation API, LocalStorage
   Description: Emergency healthcare discovery and hospital recommendation web app helping users find nearby hospitals, check blood availability, and get navigation assistance.

2. AI-Powered Railway Block Planning (Smart India Hackathon)
   Technologies: Python, AI/ML, Optimization, HTML, CSS, JavaScript, Vercel
   Description: AI-powered railway operations solution designed to support automatic block planning and improve asset availability for train operations on Indian Railways.

3. IPL Auction Simulator using AI
   Technologies: Python, AI/ML, Agentic Bidding, Data Analytics, Probability Modeling, Streamlit / React
   Description: Intelligent cricket auction simulation engine that models dynamic bidding wars, franchise purse management, and probabilistic player valuations using autonomous AI bidder agents.

4. Smart Business Assistant for MSMEs
   Technologies: HTML, CSS, JavaScript, AI, Vercel
   Description: AI-assisted platform helping small businesses and MSMEs access business support, scheme information, and digital management tools.

5. Code Intelligence Agent
   Technologies: Python, Agentic AI, LLM Tool Calling, Prompt Engineering, Web Technologies
   Description: Autonomous AI-assisted coding agent focused on tool-use workflows, AST code inspection, complexity diagnostics, and multi-step refactoring proposals.

============================================================
EXPERIENCE & PARTICIPATION
============================================================
* Smart India Hackathon (SIH) - Team Leader / Member (2024-2025)
  Worked on AI-Powered Automatic Block Planning for Indian Railways.
* AI & Vibe Coding Challenge - Developer & Presenter (2025)
  Engineered CareRoute emergency healthcare discovery application.
* MSME Workshop - Participant & Developer (2025)
  Prepared an autonomous Code Intelligence Agent for AST code inspection, complexity analysis, and developer tooling.
* Promptathon 2K26 - Participant & Developer (2026)
  Engineered AI-powered Smart Business Assistant for Small Businesses & MSMEs with automated scheme discovery and localized tools.

============================================================
INTERNSHIP OFFER LETTERS & SELECTIONS
============================================================
* DecodeLabs - Software Development / AI Intern (2025)
  Official Internship Offer Letter Received
  Focus: AI Engineering, Python, Backend APIs, Automation Systems
* Internshala - Student Partner & Web Development Intern Candidate (2025)
  Selected Candidate & Offer Credential
  Focus: Web Technologies, React, Frontend Engineering, Tech Community
* FutureInterns - Full-Stack / Python Developer Intern (2025)
  Official Internship Offer Letter Received
  Focus: Full-Stack Web Development, Python, React UI, Database Systems
* InternSpark - Software Engineering Intern (2025)
  Official Internship Offer Letter Received
  Focus: Software Engineering, Data Structures, Web Applications, Git/GitHub

============================================================
PARTICIPATION CERTIFICATES
============================================================
* Smart India Hackathon (SIH) 2024 - Participation Certificate
  Issuer: Ministry of Education's Innovation Cell (MIC), AICTE & Govt. of India
  Role: Team Leader & Participant | Project: AI-Powered Railway Block Planning
* Promptathon 2K26 - Certificate of Participation
  Issuer: Promptathon 2K26 Organizing Committee
  Role: Participant & Developer | Project: Smart Business Assistant for Small Businesses & MSMEs
* MSME Agentic AI Workshop - Certificate of Participation
  Issuer: MSME Technology Centre
  Role: Participant & Developer | Project: Autonomous Code Intelligence Agent
* AI & Vibe Coding Challenge - Certificate of Participation
  Issuer: Technical Innovation Forum
  Role: Developer & Presenter | Project: CareRoute - Emergency Healthcare Discovery

============================================================
ACHIEVEMENTS
============================================================
* Selected for Smart India Hackathon solving Indian Railways logistical challenges.
* Team leadership experience coordinating hackathon sprints and presentations.
* College technical event presenter and Articulation Club public speaking participant.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Tarshith_Bantupalli_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    const summary = `# Tarshith Bantupalli - Resume
**Computer Science Engineering Undergraduate**  
Email: ${personalInfo.email} | Location: Visakhapatnam, India  
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}  
CGPA: 7.78 | Expected Graduation: 2028`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl bg-[#0c1220] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#11192e] px-5 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Tarshith Bantupalli — Resume
              </h3>
              <p className="text-xs text-slate-400">
                Verified Academic & Technical Credentials
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              id="resume-download-txt-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Download Resume Text File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              id="resume-modal-close-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#090e18] text-slate-200 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Tarshith Bantupalli
              </h1>
              <p className="text-sm font-semibold text-blue-400 mt-1">
                Computer Science Engineering Student &amp; Agentic AI Developer
              </p>
              <p className="text-xs text-slate-400 mt-1.5 flex items-center justify-center sm:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </p>
            </div>

            <div className="text-xs text-slate-400 flex flex-col gap-1 sm:text-right">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                github.com/tarshith2006
              </a>
              <span className="text-slate-300 font-medium">B.Tech CSE &bull; Class of 2028</span>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-3">
              Education
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-white">Bachelor of Technology (B.Tech)</span> in Computer Science & Engineering
                  <p className="text-xs text-slate-400">Undergraduate Engineering Degree</p>
                </div>
                <div className="sm:text-right text-xs">
                  <span className="font-bold text-sky-400">CGPA: 7.78 / 10</span>
                  <p className="text-slate-400 font-mono">2024 – 2028 (Expected)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-slate-800/60">
                <div>
                  <span className="font-bold text-white">Intermediate (Class 12th)</span> — MPC Stream
                  <p className="text-xs text-slate-400">Junior College / Board</p>
                </div>
                <div className="sm:text-right text-xs">
                  <span className="font-bold text-slate-300">72%</span>
                  <p className="text-slate-400 font-mono">Completed 2024</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-slate-800/60">
                <div>
                  <span className="font-bold text-white">Secondary School Certificate (Class 10th)</span>
                </div>
                <div className="sm:text-right text-xs">
                  <span className="font-bold text-emerald-400">91.83%</span>
                  <p className="text-slate-400 font-mono">Completed 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Programming:</span>
                <p className="text-slate-200">Python, Java, C</p>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Web Technologies:</span>
                <p className="text-slate-200">HTML5, CSS3, JavaScript, React, Vite</p>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">AI & Modern Dev:</span>
                <p className="text-slate-200">Artificial Intelligence, Prompt Engineering, AI App Dev, Vibe Coding</p>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Core CS & Tools:</span>
                <p className="text-slate-200">Data Structures, Algorithms, DBMS, OS, Git, GitHub, VS Code, Vercel</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-3">
              Featured Projects
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">
                      {project.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-blue-300 italic">
                    "{project.tagline}"
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathons */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-3">
              Experience &amp; Participation
            </h2>
            <div className="space-y-3.5 text-xs">
              {experienceData.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white">
                      {item.event} — <span className="font-medium text-slate-300">{item.role}</span>
                    </span>
                    <span className="text-slate-400 font-mono">{item.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Offer Letters & Selections */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1.5 mb-3">
              Internship Offer Letters &amp; Selections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {internshipOffersData.map((offer) => (
                <div
                  key={offer.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-white text-xs">{offer.company}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300">
                        {offer.status}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-blue-400 mb-1">
                      {offer.role}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mb-2">
                      {offer.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {offer.domains.map((dom) => (
                      <span
                        key={dom}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Participation Certificates */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-1.5 mb-3">
              Participation Certificates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {participationCertificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-white text-xs">{cert.title}</span>
                      <span className="text-[10px] font-mono text-slate-400">{cert.date}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-amber-300 mb-1">
                      {cert.issuer}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {cert.description}
                    </p>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-slate-500">
                    ID: {cert.credentialId} &bull; <span className="text-emerald-400">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Accreditations */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1.5 mb-3">
              Verified Technical Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-white text-xs">{cert.title}</span>
                      <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-blue-400 mb-1.5">
                      {cert.issuer} &bull; {cert.credentialNote}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#11192e] px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              id="resume-copy-summary-btn"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Summary Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>
          </div>
          <span className="text-slate-400">Updated: September 2026</span>
        </div>
      </div>
    </div>
  );
};
