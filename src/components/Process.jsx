import { Boxes, ArrowRightLeft, ShieldCheck, Zap } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="relative bg-white text-slate-900">
      {/* soft blue backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="absolute -top-32 left-16 h-[26rem] w-[26rem] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute top-24 right-12 h-[24rem] w-[24rem] rounded-full bg-blue-50/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <Zap size={14} />
            Process Architecture
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            From input → Synkro Core → reliable output.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            We design systems with validation, compliance, and observability at the core —
            not fragile one-off automations.
          </p>
        </div>

        {/* Architecture card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          {/* top labels */}
          <div className="flex flex-wrap gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2">
              <ArrowRightLeft size={14} className="text-blue-600" />
              Intake
            </span>
            <span className="inline-flex items-center gap-2">
              <Boxes size={14} className="text-slate-900" />
              Orchestration
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} className="text-blue-600" />
              Compliance
            </span>
          </div>

          <div className="px-4 py-6">
            <ArchitectureSvg />

            {/* steps */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Step
                title="1) Intake"
                desc="Capture leads and bookings with strict data contracts."
              />
              <Step
                title="2) Orchestrate"
                desc="Route workflows through queues with retries and observability."
              />
              <Step
                title="3) Validate"
                desc="Deduplicate, verify, and enforce business rules."
              />
              <Step
                title="4) Dispatch"
                desc="Send via official APIs with compliance-first defaults."
              />
            </div>

            <p className="mt-6 text-xs text-slate-500">
              This diagram reflects a production mindset — failure paths, rate-limits,
              and audit logs are assumed by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-xs leading-6 text-slate-700">{desc}</div>
    </div>
  );
}

function ArchitectureSvg() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <svg viewBox="0 0 980 320" className="h-auto w-full">
        <defs>
          <linearGradient id="nodeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="coreFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#eff6ff" />
            <stop offset="1" stopColor="#dbeafe" />
          </linearGradient>

          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="rgba(15,23,42,0.18)"
            />
          </filter>
        </defs>

        {/* connectors */}
        <path
          d="M 205 160 C 285 160, 300 160, 380 160"
          fill="none"
          stroke="rgba(15,23,42,0.25)"
          strokeWidth="3"
          strokeDasharray="10 8"
        />
        <path
          d="M 600 160 C 680 160, 695 160, 775 160"
          fill="none"
          stroke="rgba(15,23,42,0.25)"
          strokeWidth="3"
          strokeDasharray="10 8"
        />

        <polygon points="380,160 366,152 366,168" fill="rgba(15,23,42,0.35)" />
        <polygon points="775,160 761,152 761,168" fill="rgba(15,23,42,0.35)" />

        {/* nodes */}
        <g filter="url(#shadow)">
          <rect
            x="40"
            y="104"
            rx="18"
            ry="18"
            width="165"
            height="112"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="1.2"
          />
          <rect
            x="380"
            y="78"
            rx="22"
            ry="22"
            width="220"
            height="164"
            fill="url(#coreFill)"
            stroke="url(#nodeStroke)"
            strokeWidth="2.4"
          />
          <rect
            x="775"
            y="104"
            rx="18"
            ry="18"
            width="165"
            height="112"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="1.2"
          />
        </g>

        {/* text */}
        <text x="122" y="145" textAnchor="middle" fontSize="14" fill="#0f172a" letterSpacing="2">
          INPUT
        </text>
        <text x="122" y="170" textAnchor="middle" fontSize="14" fill="#334155">
          Leads / Bookings
        </text>
        <text x="122" y="194" textAnchor="middle" fontSize="12" fill="#64748b">
          Web / Email / Ads
        </text>

        <text x="490" y="125" textAnchor="middle" fontSize="15" fill="#2563eb" letterSpacing="2">
          SYNKRO CORE
        </text>
        <text x="490" y="152" textAnchor="middle" fontSize="14" fill="#334155">
          Orchestration + Validation
        </text>
        <text x="490" y="178" textAnchor="middle" fontSize="12" fill="#64748b">
          n8n • Webhooks • Queues
        </text>
        <text x="490" y="202" textAnchor="middle" fontSize="12" fill="#64748b">
          retries • rate-limits • audit logs
        </text>

        <text x="857" y="145" textAnchor="middle" fontSize="14" fill="#0f172a" letterSpacing="2">
          OUTPUT
        </text>
        <text x="857" y="170" textAnchor="middle" fontSize="14" fill="#334155">
          Official API Dispatch
        </text>
        <text x="857" y="194" textAnchor="middle" fontSize="12" fill="#64748b">
          Policy-safe Comms
        </text>
      </svg>
    </div>
  );
}
