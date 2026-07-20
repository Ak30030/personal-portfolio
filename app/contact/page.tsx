"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "awuntubafredrick@gmail.com" },
  { icon: MapPin, label: "Location", value: "Ghana" },
  { icon: Phone, label: "Phone", value: "Your phone number" },
  { icon: Clock, label: "Office Hours", value: "Mon - Fri" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="font-mono text-5xl font-bold mb-5" style={{ color: "var(--text)" }}>
          Get In Touch
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to
          hear from you. Send me a message and I&apos;ll get back to you as
          soon as possible.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="flex items-center gap-3 font-mono text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>
            <span className="w-1 h-6 rounded" style={{ backgroundColor: "#E8A33D" }} />
            Contact Information
          </h2>

          <div className="space-y-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="cursor-hover-target flex items-center gap-4 rounded-xl border border-white/10 bg-[#121B2E]/60 p-4 transition-colors hover:border-[#E8A33D]"
              >
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(232,163,61,0.15)" }}
                >
                  <Icon size={20} color="#E8A33D" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">{label}</p>
                  <p className="font-semibold" style={{ color: "var(--text)" }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div>
          {status === "success" ? (
            <div
              className="rounded-2xl border p-6 text-center h-full flex flex-col items-center justify-center"
              style={{ borderColor: "#2DD4BF", backgroundColor: "rgba(45,212,191,0.1)" }}
            >
              <p className="font-mono font-semibold text-lg" style={{ color: "#2DD4BF" }}>
                Message sent successfully!
              </p>
              <p className="text-[var(--text-muted)] mt-2">
                Thanks for reaching out — I&apos;ll reply as soon as I can.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="cursor-hover-target mt-4 px-5 py-2 rounded-full font-semibold text-sm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#2DD4BF", color: "#0B1220" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-[var(--text-muted)]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 bg-[#121B2E] border border-white/10 outline-none transition-colors focus:border-[#2DD4BF]"
                    style={{ color: "var(--text)" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-[var(--text-muted)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 bg-[#121B2E] border border-white/10 outline-none transition-colors focus:border-[#2DD4BF]"
                    style={{ color: "var(--text)" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-[var(--text-muted)]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-[#121B2E] border border-white/10 outline-none transition-colors focus:border-[#2DD4BF]"
                  style={{ color: "var(--text)" }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-[var(--text-muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-[#121B2E] border border-white/10 outline-none transition-colors focus:border-[#2DD4BF] resize-none"
                  style={{ color: "var(--text)" }}
                />
                <p className="text-right text-xs text-[var(--text-muted)] mt-1">
                  {formData.message.length}/1000
                </p>
              </div>

              {status === "error" && (
                <p className="text-sm" style={{ color: "#E8A33D" }}>
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}