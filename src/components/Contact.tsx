import React, { useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState<{
    opened: boolean;
    name: string;
    body: string;
  } | null>(null);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Please enter your message with a bit more detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const bodyContent = `Hi Tarshith,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    const body = encodeURIComponent(bodyContent);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Trigger user's email client
    window.location.href = mailtoUrl;

    // Show honest feedback banner informing the user that mailto was opened
    setSubmittedInfo({
      opened: true,
      name: formData.name,
      body: bodyContent,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#090d16] border-t border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p
            id="contact-description"
            className="text-slate-400 text-sm sm:text-base max-w-2xl"
          >
            {personalInfo.description ? "I'm always interested in learning, building, collaborating, and exploring new opportunities." : "Let's discuss tech, projects, or collaborations."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800/90 space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you want to discuss an open source contribution, hackathon collaboration, internship opportunity, or talk about AI and web engineering, feel free to reach out.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item with 1-click copy */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs font-medium text-slate-200 hover:text-blue-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    id="contact-copy-email-btn"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      Location
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* GitHub Item */}
                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 group-hover:text-white shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        GitHub Profile
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                        github.com/tarshith2006
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>

                {/* LinkedIn Item */}
                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                        Tarshith Bantupalli
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Standard response time is within 24–48 hours for academic, project, and professional inquiries.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101c] border border-slate-800/90 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to generate a pre-formatted email directly to Tarshith.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080d17] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.name
                        ? 'border-rose-500/80 bg-rose-950/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080d17] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email
                        ? 'border-rose-500/80 bg-rose-950/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080d17] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500/80 bg-rose-950/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

              {/* Honest Mail Client Feedback Notice */}
              {submittedInfo && (
                <div
                  id="contact-submission-notice"
                  className="mt-5 p-4 rounded-xl bg-blue-950/50 border border-blue-800/60 text-xs text-slate-200 space-y-2 animate-fadeIn"
                >
                  <div className="flex items-center gap-2 font-semibold text-blue-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email client prompt launched for {submittedInfo.name}!</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    This triggers your default email application (such as Mail, Outlook, or Gmail) with your message pre-filled.
                  </p>
                  <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Didn't open automatically?</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Subject: Portfolio Inquiry from ${formData.name}\n\n${formData.message}`
                        );
                        alert('Message draft copied to clipboard!');
                      }}
                      className="text-xs font-semibold text-blue-400 hover:underline"
                    >
                      Copy message text
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
