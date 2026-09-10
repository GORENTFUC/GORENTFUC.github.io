import { useEffect } from "react"

/**
 * Smooth hash navigation with sticky-header offset.
 * Lightweight ease-out curve via rAF (no extra deps).
 */
export function useSmoothScroll(offsetPx = 80) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    function easeOutCubic(t: number) {
      return 1 - (1 - t) ** 3
    }

    function animateScroll(toY: number) {
      const fromY = window.scrollY
      const distance = toY - fromY
      if (Math.abs(distance) < 1) return

      if (prefersReduced) {
        window.scrollTo(0, toY)
        return
      }

      const duration = Math.min(900, Math.max(420, Math.abs(distance) * 0.45))
      let start: number | null = null

      function frame(now: number) {
        if (start === null) start = now
        const progress = Math.min(1, (now - start) / duration)
        window.scrollTo(0, fromY + distance * easeOutCubic(progress))
        if (progress < 1) requestAnimationFrame(frame)
      }

      requestAnimationFrame(frame)
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest("a[href^='#']")
      if (!(anchor instanceof HTMLAnchorElement)) return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      const id = decodeURIComponent(href.slice(1))
      const section = document.getElementById(id)
      if (!section) return

      event.preventDefault()
      const top = section.getBoundingClientRect().top + window.scrollY - offsetPx
      animateScroll(Math.max(0, top))
      history.pushState(null, "", href)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [offsetPx])
}
