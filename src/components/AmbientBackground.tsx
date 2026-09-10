import { useEffect, useState } from "react"

/**
 * Personal floating constellation — games, anime, calculus, systems diagrams.
 * GPU-friendly: transform-only motion, no blur/drop-shadow filters, simplified SVG.
 */
export function AmbientBackground() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let idleId: number | undefined
    let timeoutId: number | undefined

    const enable = () => setEnabled(true)
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(enable, { timeout: 600 })
    } else {
      timeoutId = window.setTimeout(enable, 120)
    }

    return () => {
      if (idleId !== undefined && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  if (!enabled) {
    return <div className="ambient-bg ambient-bg--static" aria-hidden="true" />
  }

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg__glow ambient-bg__glow--a" />
      <div className="ambient-bg__glow ambient-bg__glow--b" />

      <div className="ambient-motif ambient-motif--controller">
        <GameControllerMotif />
      </div>
      <div className="ambient-motif ambient-motif--anime">
        <AnimeSilhouetteMotif />
      </div>
      <div className="ambient-motif ambient-motif--calculus">
        <CalculusMotif />
      </div>
      <div className="ambient-motif ambient-motif--diagram">
        <ArchitectureDiagramMotif />
      </div>
      <div className="ambient-motif ambient-motif--integral">
        <IntegralMotif />
      </div>
      <div className="ambient-motif ambient-motif--petal ambient-motif--petal-a">
        <PetalMotif />
      </div>
      <div className="ambient-motif ambient-motif--petal ambient-motif--petal-b">
        <PetalMotif />
      </div>
    </div>
  )
}

function GameControllerMotif() {
  return (
    <svg viewBox="0 0 120 72" className="ambient-motif__svg" fill="none">
      <path
        d="M28 22c-10 0-18 8-18 20s8 20 18 20c4 0 7-1 10-3l6-4h32l6 4c3 2 6 3 10 3 10 0 18-8 18-20s-8-20-18-20H28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M34 32.5v11M28.5 38h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="86" cy="34" r="3" fill="currentColor" />
      <circle cx="94" cy="42" r="3" fill="currentColor" />
    </svg>
  )
}

function AnimeSilhouetteMotif() {
  return (
    <svg viewBox="0 0 88 110" className="ambient-motif__svg" fill="none">
      <path
        d="M44 8c-16 2-28 16-30 32-1 8 1 16 5 22 2 3 3 7 2 11-2 8-1 16 4 22 4 5 11 8 19 8s15-3 19-8c5-6 6-14 4-22-1-4 0-8 2-11 4-6 6-14 5-22C72 24 60 10 44 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="50" r="2" fill="currentColor" />
      <circle cx="54" cy="50" r="2" fill="currentColor" />
      <path d="M34 66c3 4 7 6 10 6s7-2 10-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CalculusMotif() {
  return (
    <svg viewBox="0 0 140 70" className="ambient-motif__svg" fill="currentColor">
      <path d="M14 18c8 0 12 6 12 16s-4 16-12 16c-2 0-4-.4-6-1.2V44c1.4.6 3 1 5 1 5.5 0 8.5-4.2 8.5-11S18.5 23 13 23c-2 0-3.6.4-5 1V18.8c1.6-.5 3.4-.8 6-.8Z" />
      <path d="M42 28h52v3H42zm0 12h40v3H42z" opacity="0.7" />
      <path d="M100 22h6v28h-6zm10 8h18v3h-18zm0 10h14v3h-14z" opacity="0.85" />
    </svg>
  )
}

function IntegralMotif() {
  return (
    <svg viewBox="0 0 48 96" className="ambient-motif__svg" fill="currentColor">
      <path d="M28 10c0-4 3-7 7-7v4c-2 0-3 1.4-3 3v60c0 6-4.5 11-11 12l-1-4c5-.8 8-4.2 8-8V10Z" />
      <path d="M30 30h14v3H30zm2 14h10v3H32z" opacity="0.65" />
    </svg>
  )
}

function ArchitectureDiagramMotif() {
  return (
    <svg viewBox="0 0 160 100" className="ambient-motif__svg" fill="none">
      <rect x="8" y="10" width="40" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="112" y="10" width="40" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="54" y="66" width="52" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M28 34v14c0 6 6 10 12 10h14M132 34v14c0 6-6 10-12 10H106" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PetalMotif() {
  return (
    <svg viewBox="0 0 24 30" className="ambient-motif__svg" fill="currentColor">
      <path d="M12 2c6 6 8 12 5 20-5 1.5-10 1.5-15 0C-1 14 1 8 7 2c1.5 3 3 4.5 5 0Z" />
    </svg>
  )
}
