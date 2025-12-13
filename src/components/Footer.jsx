import React from "react";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        {/* TOP ROW */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <span className="text-base font-bold tracking-tight text-slate-900">
              SYNKRO <span className="text-blue-600">Works</span>
            </span>
            <p className="mt-1 text-xs text-slate-500">
              Engineering-led automation • US & EU
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a
              href="mailto:rushishete72@gmail.com"
              className="flex items-center gap-1.5 hover:text-slate-900 transition"
            >
              <Mail size={14} className="text-blue-600" />
              hello@synkro.in
            </a>

            <span className="hidden sm:inline text-slate-300">|</span>

            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-600" />
              GDPR Ready
            </span>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-4">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Synkro Works
          </p>

          <p className="text-[11px] text-slate-400">
            Official APIs • No spam • Audit-friendly
          </p>
        </div>
      </div>
    </footer>
  );
}
