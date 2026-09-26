import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const directEmail = "romeelshaikh3@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/romeel-iqbal-6277493a0/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please provide your name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please provide a subject.";
    if (!formData.message.trim()) errs.message = "Please provide a message.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Realistic brief client dispatch preparation
    setTimeout(() => {
      const mailtoLink = `mailto:${directEmail}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`,
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`,
      )}`;

      window.location.href = mailtoLink;
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2A2A2A]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Large Editorial Heading & Direct Links */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[11px] font-mono tracking-spacious text-text-muted uppercase block mb-3">
              08 &bull; INITIATE CONTACT
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-text-primary uppercase mb-6">
              Have a project
              <br />
              in mind?
              <br />
              <span className="text-[#888888]">Let's talk.</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary font-light max-w-lg leading-relaxed">
              Open for software engineering internships, technical
              collaborations, and full-stack web engagements. Let's discuss
              requirements and architecture.
            </p>
          </div>

          {/* Direct channels */}
          <div className="space-y-4 pt-4 border-t border-[#2A2A2A]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#0E0E0E] border border-[#222222]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-text-muted" />
                <span className="text-xs sm:text-sm font-mono text-text-primary">
                  {directEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase border border-[#2A2A2A] hover:border-white text-text-secondary hover:text-white transition-colors self-start sm:self-auto"
                aria-label="Copy direct email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-text-muted" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 bg-[#0E0E0E] border border-[#222222] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-text-muted" />
                <span className="text-xs sm:text-sm font-mono text-text-primary">
                  linkedin.com/in/romeel-iqbal
                </span>
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-editorial uppercase border border-[#2A2A2A] hover:border-white text-text-secondary hover:text-white transition-colors"
              >
                <span>Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Minimal Editorial Contact Form */}
        <div className="lg:col-span-6 bg-[#0E0E0E] border border-[#222222] p-8 sm:p-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 border border-white flex items-center justify-center mx-auto text-white">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-text-primary uppercase">
                Draft Prepared
              </h3>
              <p className="text-sm text-text-secondary font-light max-w-sm mx-auto leading-relaxed">
                Your email client was prompted with the message content. You can
                also write directly to{" "}
                <span className="text-white font-mono">{directEmail}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-mono tracking-editorial uppercase text-text-primary underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Henderson"
                  className="w-full bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-text-primary placeholder:text-[#444444] focus:border-white focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-xs font-mono text-red-400 mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2"
                >
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="alex@company.com"
                  className="w-full bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-text-primary placeholder:text-[#444444] focus:border-white focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-xs font-mono text-red-400 mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Software Engineering Role / Project Inquiry"
                  className="w-full bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-text-primary placeholder:text-[#444444] focus:border-white focus:outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="text-xs font-mono text-red-400 mt-1.5">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Outline your timeline, requirements, or role specifications..."
                  className="w-full bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-text-primary placeholder:text-[#444444] focus:border-white focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-xs font-mono text-red-400 mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#161616] border border-[#2A2A2A] text-text-primary font-heading font-semibold text-xs tracking-editorial uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <span className="font-mono text-xs tracking-spacious uppercase">
                    [PREPARING DISPATCH...]
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Minimal Privacy Note */}
              <p className="text-[10px] font-mono text-text-muted leading-relaxed pt-2 border-t border-[#1A1A1A]">
                Privacy note: Your contact details are used solely to reply
                directly to your inquiry. No information is stored in tracking
                databases or shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
