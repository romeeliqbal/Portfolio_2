import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Copy, Check } from "lucide-react";

export default function Contact() {
  const [contactMode, setContactMode] = useState("inquiry"); // 'inquiry' | 'feedback'
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

    // Prepare dispatch
    setTimeout(() => {
      const subjectPrefix =
        contactMode === "feedback"
          ? "[Portfolio Feedback]"
          : "[Project Inquiry]";
      const mailtoLink = `mailto:${directEmail}?subject=${encodeURIComponent(
        `${subjectPrefix} ${formData.subject}`,
      )}&body=${encodeURIComponent(
        `Type: ${contactMode === "feedback" ? "Developer Feedback" : "Project Inquiry"}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`,
      )}`;

      window.location.href = mailtoLink;
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section
      id="contact"
      className="w-full bg-bg-accent border-t border-border-accent"
    >
      <div className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Large Editorial Heading & Direct Links */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-editorial text-accent uppercase block mb-3 font-medium">
                08 &bull;{" "}
                {contactMode === "feedback"
                  ? "FEEDBACK & REVIEWS"
                  : "INITIATE CONTACT"}
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-text uppercase mb-6 break-normal hyphens-none">
                {contactMode === "feedback" ? (
                  <>
                    Share your
                    <br />
                    feedback.
                    <br />
                    <span className="text-text-muted">Always learning.</span>
                  </>
                ) : (
                  <>
                    Have a project
                    <br />
                    in mind?
                    <br />
                    <span className="text-text-muted">Let's talk.</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-text-secondary font-normal max-w-lg leading-relaxed">
                {contactMode === "feedback"
                  ? "Constructive reviews, architecture thoughts, and technical suggestions from fellow developers and hiring teams are always welcomed."
                  : "Open for software engineering internships, technical collaborations, and full-stack web engagements. Let's discuss requirements and architecture."}
              </p>
            </div>

            {/* Direct channels */}
            <div className="space-y-3.5 pt-4 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-surface border border-border hover:border-border-strong transition-all">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-text break-all">
                    {directEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-editorial uppercase border border-border hover:border-accent text-text-secondary hover:text-text transition-colors self-start sm:self-auto bg-surface-hover min-h-[44px]"
                  aria-label="Copy direct email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-status-success" />
                      <span className="text-status-success">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-surface border border-border hover:border-border-strong transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <Linkedin className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-text truncate">
                    linkedin.com/in/romeel-iqbal
                  </span>
                </div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-editorial uppercase border border-border hover:border-accent text-text-secondary hover:text-text transition-colors bg-surface-hover self-start sm:self-auto shrink-0 min-h-[44px]"
                >
                  <span>Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Editorial Contact Form with Mode Tabs */}
          <div className="lg:col-span-6 bg-surface border border-accent/30 p-6 sm:p-10 shadow-2xl space-y-6">
            {/* Mode Switcher: Inquiry vs Feedback */}
            <div className="flex items-center gap-2 pb-4 border-b border-border">
              <button
                type="button"
                onClick={() => {
                  setContactMode("inquiry");
                  setErrors({});
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-editorial uppercase transition-all border min-h-[40px] ${
                  contactMode === "inquiry"
                    ? "border-accent text-accent bg-surface-hover font-semibold"
                    : "border-border text-text-secondary hover:text-text bg-surface"
                }`}
              >
                Project Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setContactMode("feedback");
                  setErrors({});
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-editorial uppercase transition-all border min-h-[40px] ${
                  contactMode === "feedback"
                    ? "border-accent text-accent bg-surface-hover font-semibold"
                    : "border-border text-text-secondary hover:text-text bg-surface"
                }`}
              >
                Developer Feedback
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-12 h-12 border border-accent flex items-center justify-center mx-auto text-accent">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-text uppercase">
                  Draft Prepared
                </h3>
                <p className="text-sm text-text-secondary font-normal max-w-sm mx-auto leading-relaxed">
                  Your email client was prompted with the{" "}
                  {contactMode === "feedback" ? "feedback" : "inquiry"} content.
                  You can also reach out directly at{" "}
                  <span className="text-accent font-mono">{directEmail}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono tracking-editorial uppercase text-accent hover:text-accent-hover underline underline-offset-4 min-h-[44px]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1.5"
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
                    className="w-full bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs font-mono text-status-error mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1.5"
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
                    className="w-full bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs font-mono text-status-error mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1.5"
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
                    placeholder={
                      contactMode === "feedback"
                        ? "Portfolio Architecture Review / UI Feedback"
                        : "Software Engineering Role / Project Inquiry"
                    }
                    className="w-full bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-xs font-mono text-status-error mt-1.5">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[10px] font-mono tracking-spacious text-text-muted uppercase block mb-1.5"
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
                    placeholder={
                      contactMode === "feedback"
                        ? "Share your feedback on the portfolio, code structure, project demos, or user experience..."
                        : "Outline your timeline, requirements, or role specifications..."
                    }
                    className="w-full bg-bg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs font-mono text-status-error mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 py-3.5 bg-accent text-text-onAccent font-mono font-semibold text-xs tracking-editorial uppercase hover:bg-accent-hover transition-all disabled:opacity-50 min-h-[48px]"
                >
                  {submitting ? (
                    <span className="font-mono text-xs tracking-spacious uppercase">
                      [PREPARING DISPATCH...]
                    </span>
                  ) : (
                    <>
                      <span>
                        {contactMode === "feedback"
                          ? "Send Feedback"
                          : "Send Message"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Minimal Privacy Note */}
                <p className="text-[10px] font-mono text-text-muted leading-relaxed pt-2 border-t border-border">
                  Privacy note: Your contact details are used solely to reply
                  directly to your inquiry or feedback. No information is stored
                  in tracking databases or shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
