export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

// Soft blue/indigo glow used behind the hero and the newsletter block, in place
// of the photographic background the Keynote template uses.
export function GlowBackground({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-sky-300/50 blur-3xl" />
      <div className="absolute left-1/3 top-10 h-[24rem] w-[24rem] rounded-full bg-indigo-300/40 blur-3xl" />
      <div className="absolute -right-32 top-48 h-[30rem] w-[30rem] rounded-full bg-violet-300/35 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  )
}
