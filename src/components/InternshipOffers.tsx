import React, { useState } from 'react';
import { Briefcase, Building2, CheckCircle2, FileText, ArrowRight, X, Sparkles, ShieldCheck, MailCheck, Calendar } from 'lucide-react';
import { internshipOffersData } from '../data/portfolioData';
import { InternshipOfferItem } from '../types';

export const InternshipOffers: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<InternshipOfferItem | null>(null);

  const getCompanyVisual = (id: string) => {
    switch (id) {
      case 'decodelabs':
        return {
          bg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
          accent: 'text-indigo-400',
          hoverBorder: 'hover:border-indigo-500/50',
          glow: 'group-hover:shadow-indigo-950/20',
        };
      case 'internshala':
        return {
          bg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
          accent: 'text-sky-400',
          hoverBorder: 'hover:border-sky-500/50',
          glow: 'group-hover:shadow-sky-950/20',
        };
      case 'futureinterns':
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          accent: 'text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/50',
          glow: 'group-hover:shadow-emerald-950/20',
        };
      case 'internspark':
        return {
          bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          accent: 'text-amber-400',
          hoverBorder: 'hover:border-amber-500/50',
          glow: 'group-hover:shadow-amber-950/20',
        };
      default:
        return {
          bg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          accent: 'text-blue-400',
          hoverBorder: 'hover:border-blue-500/50',
          glow: 'group-hover:shadow-blue-950/20',
        };
    }
  };

  return (
    <section id="internships" className="py-20 bg-[#090d16] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MailCheck className="w-3.5 h-3.5" />
            <span>Opportunities &amp; Selections</span>
          </div>
          <h2
            id="internship-offers-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Internship Offer Letters
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Official internship offer letters and competitive candidate selections received across tech organizations and developer platforms.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {internshipOffersData.map((offer) => {
            const visual = getCompanyVisual(offer.id);
            return (
              <div
                key={offer.id}
                id={`offer-card-${offer.id}`}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0b101c] border border-slate-800/90 ${visual.hoverBorder} transition-all duration-300 flex flex-col justify-between group hover:shadow-xl ${visual.glow} hover:-translate-y-1`}
              >
                <div>
                  {/* Top Bar: Company Badge & Status */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl border ${visual.bg}`}>
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {offer.company}
                        </h3>
                        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{offer.dateReceived}</span>
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{offer.badgeText || offer.status}</span>
                    </span>
                  </div>

                  {/* Role Title */}
                  <div className="mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                      Designation / Role
                    </span>
                    <h4 className="text-base font-bold text-slate-100">
                      {offer.role}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="bg-[#080d17] p-3.5 rounded-xl border border-slate-800/80 mb-4 space-y-2">
                    {offer.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-blue-400 mt-0.5 font-bold">&bull;</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Domain Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {offer.domains.map((dom) => (
                      <span
                        key={dom}
                        className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-[#101726] border border-slate-800 text-slate-300"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link / Modal trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Official Offer Letter</span>
                  </span>
                  <button
                    onClick={() => setSelectedOffer(offer)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>View Offer Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Offer Letter Preview Modal */}
      {selectedOffer && (
        <div
          id="offer-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#0c1424] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-slate-800 pb-5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-emerald-950/70 border border-emerald-800/60 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{selectedOffer.badgeText || 'Offer Letter Received'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedOffer.company}
              </h3>
              <p className="text-sm font-semibold text-blue-400">
                {selectedOffer.role}
              </p>
            </div>

            {/* Offer Specs */}
            <div className="space-y-3 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Credential Type:</span>
                <span className="font-semibold text-white">{selectedOffer.type}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Target Domains:</span>
                <span className="font-semibold text-slate-200 text-right">
                  {selectedOffer.domains.join(', ')}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Offer Period:</span>
                <span className="font-mono text-slate-300">{selectedOffer.dateReceived}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/60">
                <span className="text-slate-400">Selection Status:</span>
                <span className="font-semibold text-emerald-400">Verified Offer / Selection</span>
              </div>
            </div>

            {/* Key Deliverables & Highlights */}
            <div className="mb-6 bg-[#080d18] p-4 rounded-xl border border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Offer Letter Scope &amp; Focus
              </h5>
              <div className="space-y-2">
                {selectedOffer.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Verified Candidate Credential
              </span>
              <button
                onClick={() => setSelectedOffer(null)}
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
