const SHOW_PROOF = false;

export default function Achievements() {
  if (!SHOW_PROOF) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight">Proof</h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Case studies will be visible here once assets are ready.
        </p>
      </div>
    </div>
  );
}
