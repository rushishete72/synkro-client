import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Server,
  Gauge,
  Sparkles,
} from "lucide-react";

const LOGS = [
  ["INFO", "Booting Synkro Systems Runtime v1.0.0"],
  ["INFO", "Loading workflow graph: booking-intake.pipeline"],
  ["SECURE", "TLS enabled • Secrets loaded from vault"],
  ["INFO", "Connecting: n8n • Webhooks • Queue"],
  ["OK", "Validation online • Rate-limits configured"],
  ["SUCCESS", "Official API dispatch ready (policy-safe)"],
];

function levelClass(lvl) {
  switch (lvl) {
    case "SECURE":
      return "text-cyan-200";
    case "OK":
      return "text-emerald-200";
    case "SUCCESS":
      return "text-violet-200";
    default:
      return "text-sky-200";
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* TRUST (EU/US) LIGHT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="absolute -top-24 left-10 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute top-20 right-10 h-[22rem] w-[22rem] rounded-full bg-slate-200/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),
                            linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)]
          [background-size:40px_40px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-10 sm:pb-14">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* badges (LIGHT) */}
            <div className="flex flex-wrap gap-2 max-w-full">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <ShieldCheck size={14} />
                Compliance-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <Gauge size={14} />
                Low-latency systems
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <Server size={14} />
                Automation + Build
              </span>
            </div>

            {/* headline */}
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              We build{" "}
              <span className="bg-gradient-to-r from-blue-700 to-slate-900 bg-clip-text text-transparent">
                systems
              </span>{" "}
              that run your business.
            </h1>

            {/* subcopy (LIGHT) */}
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
              Synkro Works designs and ships business-critical pipelines — booking ops,
              internal tools, inventory workflows, and compliance-safe communications —
              using the right mix of proven platforms and custom engineering.
            </p>

            {/* CTA row - mobile full width */}
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Free Consultation <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                See capabilities
              </a>
            </div>

            {/* trust cards (LIGHT) */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <LockKeyhole className="mt-0.5 text-blue-700" size={18} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Policy-safe by design
                    </div>
                    <div className="mt-1 text-xs leading-6 text-slate-600">
                      Official APIs • GDPR-ready patterns • audit-friendly defaults.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 text-slate-900" size={18} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Systems thinking
                    </div>
                    <div className="mt-1 text-xs leading-6 text-slate-600">
                      validation • retries • rate-limits • observability.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* micro note */}
            <p className="mt-4 text-xs text-slate-500">
              No fluff. Clean architecture + execution.
            </p>
          </div>

          {/* RIGHT: Console (DARK, premium contrast) */}
          <div className="lg:pt-2">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* top bar */}
              <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>

                <div className="font-mono text-[12px] text-slate-200">
                  synkro://system-console
                </div>

                <div className="ml-auto font-mono text-[12px] text-cyan-200/90">
                  status: online
                </div>
              </div>

              <ConsoleBody />

              {/* footer chips */}
              <div className="flex flex-wrap gap-2 border-t border-slate-800 bg-slate-900 px-4 py-3">
                {["webhooks", "n8n", "official-apis", "audit-logs"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 font-mono text-[12px] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* week 1 card (LIGHT) */}
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
              <div className="text-sm font-semibold text-slate-900">
                What you get in week 1
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                {[
                  "Architecture map (data flow + failure paths)",
                  "Quick revenue workflow (booking/intake) shipped",
                  "Compliance defaults (official APIs + audit-ready)",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Console is simulated — it exists to show how we think.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsoleBody() {
  const list = [...LOGS, ...LOGS];

  return (
    <div className="relative h-44 sm:h-64 overflow-hidden px-4 py-4 font-mono text-[12px] sm:text-[12.5px] leading-6 text-slate-100">
      {/* scanline */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-cyan-200/30 shadow-[0_0_18px_rgba(34,211,238,0.25)] animate-[scan_2.8s_linear_infinite]" />

      <div className="animate-[logscroll_14s_linear_infinite] sm:animate-[logscroll_10s_linear_infinite]">
        {list.map(([lvl, msg], idx) => (
          <div
            key={idx}
            className="flex gap-3 whitespace-normal sm:whitespace-nowrap"
          >
            <span className={`w-[92px] ${levelClass(lvl)}`}>[{lvl}]</span>
            <span className="text-slate-100/90">{msg}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logscroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(256px); }
        }
      `}</style>
    </div>
  );
}
