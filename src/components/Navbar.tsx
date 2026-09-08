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
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "var(--max-content-width)",
          paddingInline: "var(--margin-mobile)",
          paddingBlock: "var(--space-md)",
        }}
      >
        <a
          href="#sobre-mi"
          className="font-title-md transition-colors"
          style={{ color: "var(--color-warm-cream)" }}
          aria-label={`${profile.alias} — ir al inicio`}
        >
          {profile.alias}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-md transition-colors hover:underline"
              style={{
                color: "var(--color-text-secondary)",
                textUnderlineOffset: "4px",
              }}
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

        <button
          type="button"
          className="inline-flex items-center justify-center md:hidden"
          style={{
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "var(--radius-default)",
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

      {isOpen ? (
        <div
          id={menuId}
          className="md:hidden"
          style={{
            borderTop: "var(--border-recessed)",
            backgroundColor: "var(--color-surface-container-low)",
            paddingInline: "var(--margin-mobile)",
            paddingBlock: "var(--space-md)",
          }}
        >
          <nav className="flex flex-col gap-3" aria-label="Navegación móvil">
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
