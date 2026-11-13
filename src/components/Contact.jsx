import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [contactMode, setContactMode] = useState("inquiry");
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

  const fieldClass =
    "w-full border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none";

  return (
    <section
      id="contact"
      data-theme="dark"
      className="w-full border-t border-border bg-bg text-text"
    >
      <div className="site-wrap section-pad">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-6">
            <div>
              <span className="meta mb-3 block">08 · Contact</span>
              <h2 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {contactMode === "feedback" ? (
                  <>
                    Share a note.
                    <br />
                    <span className="text-text-muted">I read them.</span>
                  </>
                ) : (
                  <>
                    Have a project
                    <br />
                    in mind?
                    <br />
                    <span className="text-accent">Let’s talk.</span>
                  </>
                )}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                {contactMode === "feedback"
                  ? "Architecture notes, demo feedback, and hiring-team reviews are welcome."
                  : "Open to software engineering internships, collaborations, and freelance web work. This form opens your email client with a prepared draft — nothing is stored on a server."}
              </p>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex flex-col justify-between gap-3 border border-border bg-surface p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span className="break-all font-mono text-sm text-text">
                    {directEmail}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[44px] items-center gap-1.5 self-start border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-editorial text-text-secondary hover:border-accent hover:text-text sm:self-auto"
                  aria-label="Copy direct email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-status-success" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col justify-between gap-3 border border-border bg-surface p-4 sm:flex-row sm:items-center">
                <div className="flex min-w-0 items-center gap-3">
                  <Linkedin className="h-4 w-4 shrink-0 text-accent" />
                  <span className="truncate font-mono text-sm text-text">
                    linkedin.com/in/romeel-iqbal
                  </span>
                </div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 self-start border border-border px-3.5 py-2 font-mono text-xs uppercase tracking-editorial text-text-secondary hover:border-accent hover:text-text sm:self-auto"
                >
                  Profile
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border border-border bg-surface p-6 shadow-lift sm:p-10 lg:col-span-6">
            <div className="mb-6 flex gap-2 border-b border-border pb-4">
              <button
                type="button"
                onClick={() => {
                  setContactMode("inquiry");
                  setErrors({});
                }}
                className={`min-h-[40px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                  contactMode === "inquiry"
                    ? "border-accent text-accent"
                    : "border-border text-text-secondary hover:text-text"
                }`}
              >
                Project inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setContactMode("feedback");
                  setErrors({});
                }}
                className={`min-h-[40px] border px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial ${
                  contactMode === "feedback"
                    ? "border-accent text-accent"
                    : "border-border text-text-secondary hover:text-text"
                }`}
              >
                Feedback
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 py-10 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-accent text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-text">
                  Draft prepared
                </h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-text-secondary">
                  Your email client should open with the message. You can also
                  write directly to{" "}
                  <span className="font-mono text-accent">{directEmail}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="min-h-[44px] font-mono text-xs uppercase tracking-editorial text-accent underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {[
                  ["name", "Your name", "text", "e.g. Alex Henderson"],
                  ["email", "Your email", "email", "alex@company.com"],
                  ["subject", "Subject", "text", null],
                ].map(([id, label, type, placeholder]) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="mb-1.5 block font-mono text-[10px] uppercase tracking-editorial text-text-muted"
                    >
                      {label} *
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      placeholder={
                        placeholder ||
                        (contactMode === "feedback"
                          ? "Portfolio review / UI feedback"
                          : "Role or project inquiry")
                      }
                      className={fieldClass}
                      aria-invalid={Boolean(errors[id])}
                    />
                    {errors[id] && (
                      <p className="mt-1.5 font-mono text-xs text-status-error" role="alert">
                        {errors[id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-editorial text-text-muted"
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
                        ? "Share notes on structure, demos, or experience..."
                        : "Timeline, requirements, or role details..."
                    }
                    className={`${fieldClass} resize-none`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-xs text-status-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {submitting ? "Preparing draft..." : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="border-t border-border pt-3 font-mono text-[10px] leading-relaxed text-text-muted">
                  The form prepares a mailto draft. Details are not stored in a
                  database or shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
