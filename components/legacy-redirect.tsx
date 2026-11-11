"use client"

import { useEffect } from "react"

// Old MLSB 2025 URLs (e.g. /accepted-papers) were shared publicly before the
// site moved under /2025. Static export can't do server redirects, so each
// old route renders this stub instead.
export default function LegacyRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to + window.location.hash)
  }, [to])

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="min-h-screen flex items-center justify-center p-4 text-slate-700">
        <p>
          This page has moved to <a className="text-blue-600 underline" href={to}>{to}</a>.
        </p>
      </main>
    </>
  )
}
