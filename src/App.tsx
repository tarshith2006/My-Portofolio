import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { InternshipOffers } from './components/InternshipOffers';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ParticipationCertificates } from './components/ParticipationCertificates';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections according to Landing Page Architecture */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Experience & Participation Section */}
        <Experience />

        {/* 6. Internship Offer Letters Section */}
        <InternshipOffers />

        {/* 7. Achievements Section */}
        <Achievements />

        {/* 8. Education Section */}
        <Education />

        {/* 9. Verified Technical Certifications Section */}
        <Certifications />

        {/* 10. Participation Certificates Section */}
        <ParticipationCertificates />

        {/* 11. Dedicated Resume CTA Section */}
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />

        {/* 12. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer Section */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
