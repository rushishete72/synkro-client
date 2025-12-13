import { ShieldCheck, Layers, GitBranch, Activity } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950" id="about">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute -top-28 left-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-[26rem] w-[26rem] rounded-full bg-indigo-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),
                            linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">
              <ShieldCheck size={14} />
              Who we are
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Systems engineering for operations, compliance, and revenue.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Synkro Works exists for one job: make your business predictable.
              We design systems that are observable, policy-safe, and scalable — whether that
              means custom engineering or best-in-class integrations.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              We don’t ship templates. We ship workflows that survive real traffic, real customers,
              and real edge-cases.
            </p>

            {/* mini metrics row */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
              <Stat k="Latency-aware" v="Queues + retries" />
              <Stat k="Policy-safe" v="Official APIs" />
              <Stat k="Observable" v="Logs + alerts" />
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Built for long-term reliability — not demo screenshots.
            </div>
          </div>

          {/* RIGHT: bento cards */}
          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                icon={<Layers size={18} className="text-blue-200" />}
                title="Architecture clarity"
                desc="Clear data flow, boundaries, and failure paths before building."
              />
              <Card
                icon={<GitBranch size={18} className="text-blue-200" />}
                title="Execution"
                desc="Implementation + integration + shipping, with realistic scope control."
              />
              <Card
                icon={<ShieldCheck size={18} className="text-blue-200" />}
                title="Compliance defaults"
                desc="Audit-friendly patterns. Official APIs. No risky shortcuts."
              />
              <Card
                icon={<Activity size={18} className="text-blue-200" />}
                title="Ownership mindset"
                desc="We design for production behavior: load, errors, retries, and recovery."
              />
            </div>

            {/* principle strip */}
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs font-semibold text-slate-300">Core principle</div>
              <div className="mt-2 font-mono text-sm text-white/90">
                build → validate → observe → scale
              </div>
              <div className="mt-2 text-xs text-slate-400">
                Every system decision must survive real users and real failures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">
        {icon}
        {title}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{desc}</p>
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="text-[11px] font-semibold text-slate-300">{k}</div>
      <div className="mt-1 text-xs text-white/85">{v}</div>
    </div>
  );
}
