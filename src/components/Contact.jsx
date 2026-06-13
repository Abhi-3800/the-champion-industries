import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone, Globe } from "lucide-react";
import { ADDRESS } from "../lib/data";

const Field = ({ name, label, type = "text", value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] tracking-[0.4em] uppercase text-gold">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={`contact-${name}-input`}
      className="bg-transparent border-b border-[#c08e3a]/40 focus-ring py-3 text-[#0a2540] text-base placeholder:text-[#c08e3a]/50 focus:border-[#0a2540] transition-colors"
    />
  </div>
);

const ContactInfoRow = ({ Icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 border border-[#c08e3a]/50 bg-[#fbf6ec] flex items-center justify-center shrink-0">
      <Icon size={14} className="text-[#0a2540]" />
    </div>
    <div>
      <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">{label}</p>
      {children}
    </div>
  </div>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and a message.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/xdavplzv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        "Message sent. Champion Industries will be in touch shortly.",
        {
          description: `Thank you, ${form.name}.`,
        }
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Unable to send your message right now. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex flex-col gap-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                04 — Get In Touch
              </span>
              <span className="w-16 h-px bg-[#c08e3a]/60" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase font-bold tracking-tighter leading-[0.9]">
              <span className="text-navy">Let&apos;s solve</span>
              <br />
              <span className="metallic-text">your drainage</span>
              <br />
              <span className="italic font-light text-gold-soft">together.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            <ContactInfoRow Icon={Phone} label="Phone">
              <a href={`tel:${ADDRESS.phone.replace(/\s|-/g, "")}`} className="text-navy hover:text-[#1e3a8a] transition-colors">
                {ADDRESS.phone}
              </a>
            </ContactInfoRow>
            <ContactInfoRow Icon={Mail} label="Email">
              <a href={`mailto:${ADDRESS.email}`} className="text-navy hover:text-[#1e3a8a] transition-colors break-all">
                {ADDRESS.email}
              </a>
            </ContactInfoRow>
            <ContactInfoRow Icon={Globe} label="Website">
              <a href={`https://${ADDRESS.website}`} target="_blank" rel="noreferrer" className="text-navy hover:text-[#1e3a8a] transition-colors break-all">
                {ADDRESS.website}
              </a>
            </ContactInfoRow>
            <ContactInfoRow Icon={MapPin} label="Manufacturing">
              <p className="text-navy leading-relaxed">
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
                <br />
                {ADDRESS.line3}
              </p>
            </ContactInfoRow>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-7 flex flex-col gap-8 paper-card border border-[#c08e3a]/30 p-8 md:p-10 shadow-[0_8px_32px_-16px_rgba(10,37,64,0.15)]"
          data-testid="contact-form"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Field name="name" label="Your Name" value={form.name} onChange={handle} placeholder="John Sharma" />
            <Field name="email" label="Email Address" type="email" value={form.email} onChange={handle} placeholder="you@company.com" />
          </div>
          <Field
            name="subject"
            label="Subject"
            value={form.subject}
            onChange={handle}
            placeholder="Bulk enquiry / Distributorship / Site visit"
          />

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.4em] uppercase text-gold">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handle}
              data-testid="contact-message-input"
              placeholder="Tell us about your project, site location and quantity required…"
              className="bg-transparent border-b border-[#c08e3a]/40 focus-ring py-3 text-[#0a2540] text-base placeholder:text-[#c08e3a]/50 focus:border-[#0a2540] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            data-testid="contact-submit-button"
            className="chrome-sheen btn-primary self-start inline-flex items-center gap-4 mt-4 px-10 py-5 text-[12px] tracking-[0.3em] uppercase font-semibold transition-all disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send Message"}
            <Send size={14} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
