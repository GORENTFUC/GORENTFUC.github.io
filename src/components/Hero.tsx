import { Download, Mail } from "lucide-react"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="hero-heading"
      style={{
        paddingBlock: "var(--space-4xl)",
        paddingInline: "var(--margin-mobile)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <p className="font-label-sm mb-4" style={{ color: "var(--color-architectural-ochre)" }}>
          Portfolio / System Blueprint
        </p>

        <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
          <h1
            id="hero-heading"
            className="font-display"
            style={{ color: "var(--color-warm-cream-bright)", margin: 0 }}
          >
            {profile.name}
          </h1>
          <span className="font-headline-sm" style={{ color: "var(--color-architectural-ochre)" }}>
            {profile.alias}
          </span>
        </div>

        <p
          className="font-headline-sm mt-4 max-w-2xl"
          style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-md)" }}
        >
          {profile.role}
        </p>

        <p
          className="font-body-md mt-4 max-w-2xl"
          style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-md)" }}
        >
          {profile.summary}
        </p>

        <div
          className="chip-status inline-flex items-center gap-2 mt-6"
          style={{
            marginTop: "var(--space-lg)",
            borderRadius: "var(--radius-default)",
            padding: "6px 10px",
          }}
          role="status"
          aria-label={profile.statusBadge}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span
              className="absolute inline-flex h-full w-full animate-ping opacity-60"
              style={{
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-muted-earth-olive)",
              }}
            />
            <span
              className="relative inline-flex h-2 w-2"
              style={{
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-muted-earth-olive)",
              }}
            />
          </span>
          <span className="font-label-sm">{profile.statusBadge}</span>
        </div>

        <div
          className="flex flex-wrap gap-3"
          style={{ marginTop: "var(--space-xl)" }}
        >
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 font-label-md transition-colors"
            style={{
              backgroundColor: "var(--color-architectural-ochre)",
              color: "var(--color-on-primary)",
              borderRadius: "var(--radius-default)",
              padding: "0.625rem 1rem",
              boxShadow: "var(--shadow-button-bevel)",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.backgroundColor = "var(--color-architectural-ochre-hover)"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundColor = "var(--color-architectural-ochre)"
            }}
            onMouseDown={(event) => {
              event.currentTarget.style.transform = "translateY(1px)"
            }}
            onMouseUp={(event) => {
              event.currentTarget.style.transform = "translateY(0)"
            }}
            aria-label="Descargar CV"
          >
            <Download size={16} aria-hidden="true" />
            Descargar CV
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-label-md transition-colors"
            style={{
              backgroundColor: "var(--color-surface-substrate)",
              color: "var(--color-warm-cream)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-default)",
              padding: "0.625rem 1rem",
              boxShadow: "var(--shadow-tactile-inset)",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.borderColor = "var(--color-architectural-ochre)"
              event.currentTarget.style.backgroundColor = "var(--color-elevated-plate)"
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.borderColor = "var(--color-structural-slate)"
              event.currentTarget.style.backgroundColor = "var(--color-surface-substrate)"
            }}
            aria-label="Ir a contacto"
          >
            <Mail size={16} aria-hidden="true" />
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
