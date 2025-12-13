import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Automation", href: "#automation" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function scrollToHash(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 80; // navbar offset
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 8);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onClickLink = (href) => {
    setOpen(false);
    scrollToHash(href);
    history.replaceState(null, "", href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* top glass bar */}
      <div
        className={[
          "bg-white/100 backdrop-blur-xl",
          "border-b border-slate-100/100",
          elevate ? "shadow-[0_6px_18px_rgba(15,23,42,0.08)]" : "",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => onClickLink("#home")}
            className="group inline-flex items-center gap-2"
            aria-label="Go to home"
          >
            <span className="text-[22px] font-semibold tracking-tight text-blue-900">
              Synkro
              <span className="text-slate-900 font-semibold"> works</span>
            </span>
          
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => onClickLink(l.href)}
                className="relative hover:text-slate-900 transition"
              >
                {l.label}
              </button>
            ))}

            <button
              onClick={() => onClickLink("#contact")}
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Free Consultation
            </button>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            Menu
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200/70 bg-white/85 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => onClickLink(l.href)}
                  className="text-left px-3 py-3 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-800"
                >
                  {l.label}
                </button>
              ))}

              <button
                onClick={() => onClickLink("#contact")}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Free Consultation
              </button>

              <div className="mt-2 text-xs text-slate-500 px-1">
                Official APIs • Compliance-first • Audit-friendly
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
