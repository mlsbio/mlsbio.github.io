// Hero illustration: a DNA double helix (MLCB, computational biology) and a
// protein alpha-helix ribbon (MLSB, structural biology) flow in from the left
// and merge into a single MLBIO node.

const HELIX_START = 20
const HELIX_END = 200

// DNA double helix centred on y=90. 180px / 60px period = 3 full turns, so
// both strands meet at y=90 at the end and can merge into one connector.
function dnaStrand(phase: number) {
  const pts: string[] = []
  for (let x = HELIX_START; x <= HELIX_END; x += 2) {
    const y = 90 + 22 * Math.sin(((x - HELIX_START) / 60) * 2 * Math.PI + phase)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return `M${pts.join(" L")}`
}

function dnaRungs() {
  const rungs: { x: number; y1: number; y2: number }[] = []
  for (let x = HELIX_START + 7.5; x < HELIX_END; x += 15) {
    const s = 22 * Math.sin(((x - HELIX_START) / 60) * 2 * Math.PI)
    if (Math.abs(s) > 6) rungs.push({ x, y1: 90 + s, y2: 90 - s })
  }
  return rungs
}

// Alpha helix drawn as a prolate cycloid (looping coil) centred on y=270.
// t runs to 12π so the coil ends at its top (y = 256) heading right.
function proteinCoil() {
  const a = 15 / Math.PI // horizontal advance per radian -> 30px per turn
  const b = 14
  const pts: string[] = []
  const tEnd = 12 * Math.PI
  for (let t = 0; t <= tEnd + 1e-6; t += 0.12) {
    const x = HELIX_START + a * t - b * Math.sin(t)
    const y = 270 - b * Math.cos(t)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return `M${pts.join(" L")}`
}

const coilEndX = HELIX_START + (15 / Math.PI) * 12 * Math.PI // = 200

export default function MergeIllustration({ className = "" }: { className?: string }) {
  const rungs = dnaRungs()

  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Illustration: MLCB (a DNA helix) and MLSB (a protein helix) merging into MLBIO"
      className={className}
    >
      <defs>
        <linearGradient id="mlbio-cb" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="mlbio-sb" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <radialGradient id="mlbio-node" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="60%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3730a3" />
        </radialGradient>
      </defs>

      {/* MLCB: DNA double helix */}
      <text x={HELIX_START} y="42" className="font-display" fontSize="18" fontWeight="700" fill="#1e3a8a">
        MLCB
      </text>
      <text x={HELIX_START + 62} y="42" fontSize="11" fill="#2563eb" letterSpacing="0.04em">
        computational biology
      </text>
      <g stroke="#93c5fd" strokeWidth="2" strokeLinecap="round">
        {rungs.map((r) => (
          <line key={r.x} x1={r.x} x2={r.x} y1={r.y1} y2={r.y2} />
        ))}
      </g>
      <path d={dnaStrand(0)} fill="none" stroke="url(#mlbio-cb)" strokeWidth="4" strokeLinecap="round" />
      <path d={dnaStrand(Math.PI)} fill="none" stroke="url(#mlbio-cb)" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

      {/* MLSB: protein alpha helix */}
      <text x={HELIX_START} y="332" className="font-display" fontSize="18" fontWeight="700" fill="#312e81">
        MLSB
      </text>
      <text x={HELIX_START + 60} y="332" fontSize="11" fill="#4f46e5" letterSpacing="0.04em">
        structural biology
      </text>
      <path d={proteinCoil()} fill="none" stroke="url(#mlbio-sb)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Connectors converging on the merge node */}
      <path d={`M${HELIX_END} 90 C 270 90, 280 180, 328 180`} fill="none" stroke="#bfdbfe" strokeWidth="5" strokeLinecap="round" />
      <path d={`M${coilEndX} 256 C 270 256, 280 180, 328 180`} fill="none" stroke="#c7d2fe" strokeWidth="5" strokeLinecap="round" />
      <path d={`M${HELIX_END} 90 C 270 90, 280 180, 328 180`} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" className="mlbio-flow" />
      <path d={`M${coilEndX} 256 C 270 256, 280 180, 328 180`} fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" className="mlbio-flow" />

      {/* MLBIO node */}
      <circle cx="396" cy="180" r="62" fill="#3b82f6" opacity="0.25" className="mlbio-pulse" />
      <circle cx="396" cy="180" r="62" fill="url(#mlbio-node)" />
      <circle cx="396" cy="180" r="54" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      <text x="396" y="186" textAnchor="middle" className="font-display" fontSize="22" fontWeight="700" fill="#ffffff" letterSpacing="-0.02em">
        MLBIO
      </text>
    </svg>
  )
}
