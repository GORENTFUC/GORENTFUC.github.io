import { useEffect, useId, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "@/data/portfolio"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-surface-container-low) 88%, transparent)",
        borderBottom: "var(--border-recessed)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-4"
        style={{
          maxWidth: "var(--max-content-width)",
          paddingInline: "clamp(1.25rem, 4vw, 3rem)",
          paddingBlock: "var(--space-md)",
        }}
      >
        <a
          href="#sobre-mi"
          className="font-title-md shrink-0 transition-colors"
          style={{ color: "var(--color-warm-cream)" }}
          aria-label={`${profile.name} — ir al inicio`}
        >
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.shortName}</span>
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-md transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "var(--color-warm-cream)"
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "var(--color-text-secondary)"
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span
            className="chip-status hidden items-center gap-2 sm:inline-flex"
            style={{
              borderRadius: "var(--radius-full)",
              padding: "6px 12px",
            }}
            role="status"
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse"
              style={{
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-muted-earth-olive)",
              }}
              aria-hidden="true"
            />
            <span className="font-label-sm">{profile.statusBadge}</span>
          </span>

          <button
            type="button"
            className="inline-flex items-center justify-center lg:hidden"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "var(--radius-md)",
              border: "var(--border-structural)",
              backgroundColor: "var(--color-elevated-plate)",
              color: "var(--color-warm-cream)",
              boxShadow: "var(--shadow-tactile-inset)",
            }}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id={menuId}
          className="lg:hidden"
          style={{
            borderTop: "var(--border-recessed)",
            backgroundColor: "var(--color-surface-container-low)",
            paddingInline: "clamp(1.25rem, 4vw, 3rem)",
            paddingBlock: "var(--space-md)",
          }}
        >
          <nav className="flex flex-col items-center gap-3" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label-md py-1"
                style={{ color: "var(--color-text-secondary)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
