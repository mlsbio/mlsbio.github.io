// Hero illustration: two ribbons, one carrying a DNA sequence (MLCB) and one a
// protein sequence (MLSB), converge and stack into a single MLBio band. The
// protein ribbon starts as an alpha helix (cartoon style) that unwinds into
// the flat band.

const DNA = "ATGCGTACCTGAGGCTAAGTCCGATTGCAACGTTAGCCGATCGGATCCATG"
const PROTEIN = "MKTAYIAKQRQISFVKSHFSRQLEERLGLIEVQAPILSRVGDGTQDNLSG"

// Each ribbon is 48 wide. They end stacked (centres 176 and 224), so together
// they fill the 96-wide merged band between y=152 and y=248.
const CB_PATH = "M24 72 C 190 72, 200 176, 330 176 L 470 176"

// Alpha helix: a ribbon wound around a horizontal axis at y=HELIX_Y with radius
// 24 (so it is as tall as the flat ribbon), projected onto the page. Each half
// turn is one slanted strip; strips with the ribbon in front (sin t > 0) are
// drawn over the ones behind.
const HELIX_X0 = 9 // first strip starts at x=0, flush with the DNA ribbon's rounded end
const HELIX_PITCH = 44 // px advanced per full turn
const HELIX_TURNS = 2.5 // ends on a front strip, edge-on along the bottom edge
const HELIX_HALF_WIDTH = 9
const HELIX_R = 24
const HELIX_Y = 328

function helixStrip(t0: number) {
  const top: string[] = []
  const bottom: string[] = []
  for (let i = 0; i <= 16; i++) {
    const t = t0 + (i / 16) * Math.PI
    const x = HELIX_X0 + (HELIX_PITCH * t) / (2 * Math.PI)
    const y = HELIX_Y - HELIX_R * Math.cos(t)
    top.push(`${(x - HELIX_HALF_WIDTH).toFixed(1)},${y.toFixed(1)}`)
    bottom.unshift(`${(x + HELIX_HALF_WIDTH).toFixed(1)},${y.toFixed(1)}`)
  }
  return `M${top.join(" L")} L${bottom.join(" L")} Z`
}

const helixFront: string[] = []
const helixBack: string[] = []
for (let k = 0; k < HELIX_TURNS * 2; k++) {
  ;(k % 2 === 0 ? helixFront : helixBack).push(helixStrip(k * Math.PI))
}

// Unwinding: the helix ends with the ribbon edge-on along its bottom edge. Over
// TWIST_LEN px it rotates open about that edge until it is the full 48px flat
// band, which then carries the sequence.
const HELIX_END_X = HELIX_X0 + HELIX_PITCH * HELIX_TURNS
const TWIST_START = HELIX_END_X - HELIX_HALF_WIDTH
const TWIST_LEN = 20
const BAND_START = TWIST_START + TWIST_LEN

function twistPath() {
  const top: string[] = []
  for (let i = 0; i <= 24; i++) {
    const u = i / 24
    const ease = u * u * (3 - 2 * u)
    top.push(`${(TWIST_START + u * TWIST_LEN).toFixed(1)},${(HELIX_Y + HELIX_R - 2 * HELIX_R * ease).toFixed(1)}`)
  }
  // runs 6px under the band so the two shapes overlap instead of leaving a seam
  return `M${top.join(" L")} L${BAND_START + 6},${HELIX_Y - HELIX_R} L${BAND_START + 6},${HELIX_Y + HELIX_R} L${TWIST_START},${HELIX_Y + HELIX_R} Z`
}

const SB_PATH = `M${BAND_START} ${HELIX_Y} C ${BAND_START + 87} ${HELIX_Y}, 262 224, 330 224 L 470 224`

export default function MergeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-label="Illustration: the MLCB and MLSB ribbons merging into one MLBio band"
      className={className}
    >
      <defs>
        {/* Both ribbons end in the same solid blue at x=420, so they fuse into
            one band without an overlay. */}
        <linearGradient id="mlbio-cb" gradientUnits="userSpaceOnUse" x1="24" x2="420" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#2f4fd8" />
        </linearGradient>
        <linearGradient id="mlbio-sb" gradientUnits="userSpaceOnUse" x1="24" x2="420" y1="0" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="60%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#2f4fd8" />
        </linearGradient>
        {/* Shading laid over the helix strips, so they keep the ribbon's own hue */}
        <linearGradient id="mlbio-helix-light" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.12" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.06" />
        </linearGradient>
        {/* Sequences fade out before the MLBio label */}
        <linearGradient id="mlbio-seq-fade" gradientUnits="userSpaceOnUse" x1="330" x2="395" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <mask id="mlbio-seq-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="520" height="400">
          <rect width="520" height="400" fill="url(#mlbio-seq-fade)" />
        </mask>
        <path id="mlbio-cb-path" d={CB_PATH} />
        <path id="mlbio-sb-path" d={SB_PATH} />
      </defs>

      {/* soft shadow under the ribbons */}
      <g opacity="0.18" transform="translate(0 10)" style={{ filter: "blur(10px)" }}>
        <use href="#mlbio-cb-path" fill="none" stroke="#1e3a8a" strokeWidth="48" />
        <use href="#mlbio-sb-path" fill="none" stroke="#312e81" strokeWidth="48" />
        <path d={twistPath()} fill="#312e81" />
        <rect x="420" y="152" width="98" height="96" rx="48" fill="#1e3a8a" />
      </g>

      {/* protein ribbon: alpha helix -> unwinding twist -> flat band */}
      <g fill="url(#mlbio-sb)">
        {helixBack.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="#1e1b4b" fillOpacity="0.25">
        {helixBack.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <use href="#mlbio-sb-path" fill="none" stroke="url(#mlbio-sb)" strokeWidth="49" />
      <g>
        <path d={twistPath()} fill="url(#mlbio-sb)" />
        {helixFront.map((d) => (
          <g key={d}>
            <path d={d} fill="url(#mlbio-sb)" />
            <path d={d} fill="url(#mlbio-helix-light)" />
          </g>
        ))}
      </g>

      {/* DNA ribbon */}
      <use href="#mlbio-cb-path" fill="none" stroke="url(#mlbio-cb)" strokeWidth="48" strokeLinecap="round" />

      {/* merged band: rounded end in the shared solid blue */}
      <rect x="420" y="152" width="98" height="96" rx="48" fill="#2f4fd8" />

      {/* sequences running along the ribbons */}
      <g
        mask="url(#mlbio-seq-mask)"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="13"
        fontWeight="600"
        letterSpacing="3"
        fill="#ffffff"
        fillOpacity="0.85"
        dominantBaseline="central"
      >
        <text>
          <textPath href="#mlbio-cb-path" startOffset="14">{DNA}</textPath>
        </text>
        <text>
          <textPath href="#mlbio-sb-path" startOffset="2">{PROTEIN}</textPath>
        </text>
      </g>

      <text
        x="438"
        y="201"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-display"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        MLBio
      </text>

      {/* labels */}
      <text x="24" y="28" className="font-display" fontSize="20" fontWeight="700" fill="#1e3a8a">
        MLCB
      </text>
      <text x="24" y="384" className="font-display" fontSize="20" fontWeight="700" fill="#312e81">
        MLSB
      </text>
    </svg>
  )
}
