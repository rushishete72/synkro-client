import {
  Boxes,
  ShieldCheck,
  Cpu,
  Workflow,
  LineChart,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            <Boxes size={14} />
            Capabilities
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            Engineering-first systems — built for reliability and compliance.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            We ship production-grade workflows for operations and revenue: booking & intake,
            automation, inventory flows, and policy-safe communications.
          </p>
        </div>

        {/* Services bento */}
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <BentoCard
            className="lg:col-span-7"
            icon={<Cpu className="text-blue-700" size={18} />}
            title="Custom Engineering"
            desc="React/Node/Databases — when off-the-shelf tools can’t match your workflow."
            bullets={[
              "Internal tools & dashboards",
              "Booking / CRM foundations",
              "Inventory + operations workflows",
            ]}
          />

          <BentoCard
            className="lg:col-span-5"
            icon={<Workflow className="text-slate-900" size={18} />}
            title="Automated Infrastructure"
            desc="n8n + Webhooks + APIs — orchestration with validation, retries, and observability."
            bullets={[
              "Lead intake → routing → follow-ups",
              "Queue + rate-limit patterns",
              "Audit logs & error handling",
            ]}
          />

          <BentoCard
            className="lg:col-span-6"
            icon={<ShieldCheck className="text-blue-700" size={18} />}
            title="Compliance & Stack Architecture"
            desc="We choose the right tech for your business — policy-safe, scalable, audit-friendly."
            bullets={[
              "Official APIs only",
              "GDPR-ready system patterns",
              "Vendor/tool selection (best-in-class)",
            ]}
          />

          <BentoCard
            className="lg:col-span-6"
            icon={<LineChart className="text-slate-900" size={18} />}
            title="Revenue Ops Foundations"
            desc="Start with a clean revenue generator. Upgrade into full systems over time."
            bullets={[
              "Booking optimization",
              "Retention workflows",
              "Ops dashboards for visibility",
            ]}
          />
        </div>

        {/* Anchors for navbar: #automation and #industries */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {/* Automation */}
          <div
            id="automation"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="text-sm font-semibold text-slate-900">Automation</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We automate workflows that touch revenue and operations: lead intake, booking,
              reminders, validation, routing, and official API dispatch — with retries and logs.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[
                "n8n workflows with webhooks & queues",
                "Validation + dedupe + business rules",
                "Observability: logs, alerts, failure paths",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="mt-0.5 text-blue-700" size={16} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div
            id="industries"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="text-sm font-semibold text-slate-900">Industries</div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We focus on service businesses that value reliability and compliance:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Dentists", "Clinics", "Salons", "Law firms", "Home services"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Talk to an engineer <ArrowRight size={18} />
            </a>

            <div className="mt-3 text-xs text-slate-500">
              Official APIs • compliance-first defaults • audit-friendly delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ icon, title, desc, bullets, className = "" }) {
  return (
    <div
      className={[
        "rounded-3xl border border-slate-200 bg-white p-6",
        "shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        className,
      ].join(" ")}
    >
      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800">
        {icon}
        {title}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-700">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((x) => (
          <li key={x} className="flex gap-2">
            <Check className="mt-0.5 text-slate-900" size={16} />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
