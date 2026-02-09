"use client";

import { useEffect, useState } from "react";
import { Mail, Trophy, Users, Rocket, X, Send } from "lucide-react";
import toast from "react-hot-toast";

type SponsorForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function MoreSponsors() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<SponsorForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.company.trim()) return "Please enter your company name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (form.phone.replace(/\D/g, "").length < 8)
      return "Please enter a valid phone number.";
    return null;
  };

const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const err = validate();
  if (err) {
    toast.error(err);
    return;
  }

try {
  setSubmitting(true);

  const res = await fetch("/api/sponsor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    toast.error(data?.message || "Failed to submit.");
    return;
  }

  toast.success("Thanks for sponsoring CodeFest! 🚀");

  setForm({ name: "", company: "", email: "", phone: "", message: "" });
  setOpen(false);
} catch {
  toast.error("Something went wrong. Please try again.");
} finally {
  setSubmitting(false);
}

};


  return (
    <>
      <section
        id="sponsor-us"
        className="bg-black text-white py-14 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold text-yellow-400 tracking-widest">
            Sponsor CodeFest
          </h2>

          <div className="flex flex-wrap justify-center gap-10 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Users className="text-yellow-400" size={20} />
              Talent Access
            </div>

            <div className="flex items-center gap-2">
              <Rocket className="text-yellow-400" size={20} />
              Brand Exposure
            </div>

            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-400" size={20} />
              Awards & Booths
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:brightness-95 transition"
          >
            <Mail size={16} />
            Sponsor Us
          </button>
        </div>
      </section>

      {/* Toast Form */}
      {open && (
        <>
          {/* subtle overlay (optional) */}
          <div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:w-[420px] border border-t-gray-500 border-gray-700 rounded-lg">
            <div className="rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">
                    Sponsor Us
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition"
                  aria-label="Close"
                >
                  <X className="text-white/70" size={18} />
                </button>
              </div>

              <form onSubmit={onSubmit} className="p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-white/70">Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">
                      Company Name *
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60"
                      placeholder="Company"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-white/70">Email *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      type="email"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      inputMode="tel"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60"
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-white/70">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={3}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-yellow-400/60 resize-none"
                    placeholder="Tell us what sponsorship you’re interested in…"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:bg-white/5 transition"
                    disabled={submitting}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-yellow-500 text-black hover:brightness-95 transition disabled:opacity-60"
                  >
                    <Send size={16} />
                    {submitting ? "Sending..." : "Send"}
                  </button>
                </div>

                <p className="text-[11px] text-white/40">
                  We’ll respond within 24–48 hours.
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
