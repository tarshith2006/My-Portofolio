import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Calendar, Building, X, FileText, ArrowRight } from 'lucide-react';
import { participationCertificatesData } from '../data/portfolioData';
import { ParticipationCertificateItem } from '../types';

export const ParticipationCertificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<ParticipationCertificateItem | null>(null);

  return (
    <section id="participation-certificates" className="py-20 bg-[#070b12] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/40 border border-amber-800/40 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Event Credentials</span>
          </div>
          <h2
            id="participation-certificates-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Participation Certificates
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Official certificates of participation earned across national hackathons, technical promptathons, and engineering workshops.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {participationCertificatesData.map((cert) => (
            <div
              key={cert.id}
              id={`part-cert-${cert.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-400 block">
                        {cert.event}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Role & Project */}
                <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800/80 mb-4 space-y-1">
                  <div className="text-xs text-slate-300">
                    <span className="text-slate-500 font-medium">Role: </span>
                    <span className="font-semibold text-slate-200">{cert.role}</span>
                  </div>
                  {cert.project && (
                    <div className="text-xs text-slate-300">
                      <span className="text-slate-500 font-medium">Focus: </span>
                      <span className="text-amber-300 font-medium">{cert.project}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skill / Tag Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skillsOrTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-[#101726] border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  ID: {cert.credentialId}
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>View Certificate Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          id="cert-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#0c1424] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header Stamp */}
            <div className="border-b border-slate-800 pb-5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-amber-950/70 border border-amber-800/60 text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{selectedCert.credentialStatus}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-slate-400">
                Issued by <span className="text-white font-medium">{selectedCert.issuer}</span>
              </p>
            </div>

            {/* Certificate Spec Table */}
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Event / Challenge:</span>
                <span className="font-semibold text-white">{selectedCert.event}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Participation Role:</span>
                <span className="font-semibold text-amber-300">{selectedCert.role}</span>
              </div>
              {selectedCert.project && (
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Developed Solution:</span>
                  <span className="font-semibold text-slate-200 text-right">{selectedCert.project}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Academic Period:</span>
                <span className="font-mono text-slate-300">{selectedCert.date}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Credential ID:</span>
                <span className="font-mono text-amber-400 font-semibold">{selectedCert.credentialId}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed mb-6 bg-[#080d18] p-4 rounded-xl border border-slate-800">
              {selectedCert.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Verified Participation Record
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
