import { useState } from "react";
import { ArrowRight, Mail, ShieldCheck, Activity } from "lucide-react";

// 1) Replace this with your Formspree endpoint
// Example: https://formspree.io/f/abcdwxyz
const FORM_ENDPOINT = "https://formspree.io/f/mjknladj";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950">
      {/* backdrop (same family as About) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute -top-28 left-12 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-[26rem] w-[26rem] rounded-full bg-indigo-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),
                            linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">
                <ShieldCheck size={14} />
                Compliance-first engagement
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Let’s design your next system.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your goal — booking, automation, inventory workflows, or
                communications. We’ll propose a clean architecture and a realistic
                execution plan.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-300" />
                  <span>hello@synkro.in</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Activity size={14} className="text-blue-300" />
                  Response within 24–48h (engineering review)
                </div>

                <div className="text-xs text-slate-400">
                  Official APIs only • audit-friendly defaults • no shady automation
                </div>
              </div>

              {/* Success / Error message (left side) */}
              {status === "success" && (
                <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  ✅ Message received. We’ll reply with next steps shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 rounded-2xl border border-rose-400/25 bg-rose-400/10 p-4 text-sm text-rose-100">
                  ❌ Something went wrong. Please email us directly at{" "}
                  <span className="font-semibold">hello@synkro.in</span>.
                </div>
              )}
            </div>

            {/* RIGHT – FORM */}
            <form className="lg:col-span-6 grid gap-3" onSubmit={onSubmit}>
              {/* Formspree hidden fields (optional but useful) */}
              <input type="hidden" name="_subject" value="New Inquiry — Synkro Works" />
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <Input name="name" placeholder="Name" required disabled={status === "sending"} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  disabled={status === "sending"}
                />
              </div>

              <Input
                name="company"
                placeholder="Company / Website (optional)"
                disabled={status === "sending"}
              />

              <Textarea
                name="message"
                placeholder="What are you trying to build?"
                required
                disabled={status === "sending"}
              />

              <button
                type="submit"
                disabled={status === "sending" || FORM_ENDPOINT.includes("REPLACE_ME")}
                className={[
                  "mt-1 inline-flex items-center justify-center gap-2 rounded-2xl",
                  "border border-blue-400/25 px-4 py-3 text-sm font-semibold text-white",
                  FORM_ENDPOINT.includes("REPLACE_ME")
                    ? "bg-slate-700 cursor-not-allowed"
                    : status === "sending"
                    ? "bg-blue-600/70 cursor-wait"
                    : "bg-blue-600 hover:bg-blue-700",
                ].join(" ")}
              >
                {status === "sending" ? "Sending..." : "Send"}
                <ArrowRight size={18} />
              </button>

              <div className="text-xs text-slate-400">
                We’ll reply with architecture suggestions + next steps. No spam.
              </div>

              {FORM_ENDPOINT.includes("REPLACE_ME") && (
                <div className="text-xs text-amber-200/90">
                  ⚠️ Add your Formspree endpoint in <span className="font-mono">FORM_ENDPOINT</span>.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-white/10 bg-white/[0.04]",
        "px-4 py-3 text-sm text-white placeholder:text-white/35",
        "outline-none focus:border-blue-400/40 focus:ring-1 focus:ring-blue-500/30",
        "disabled:opacity-60",
        className,
      ].join(" ")}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/[0.04]",
        "px-4 py-3 text-sm text-white placeholder:text-white/35",
        "outline-none focus:border-blue-400/40 focus:ring-1 focus:ring-blue-500/30",
        "disabled:opacity-60",
        className,
      ].join(" ")}
    />
  );
}
