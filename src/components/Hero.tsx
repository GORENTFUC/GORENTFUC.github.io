import { ArrowRight, Mail } from "lucide-react"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="hero-heading"
      style={{
        paddingBlock: "clamp(3rem, 10vw, var(--space-4xl))",
        paddingInline: "clamp(1.25rem, 4vw, 3rem)",
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: "var(--max-content-width)" }}>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <p className="font-label-sm" style={{ color: "var(--color-architectural-ochre)", margin: 0 }}>
            System Specification & Overview
          </p>
          <span
            className="chip-status inline-flex items-center gap-2"
            style={{ borderRadius: "var(--radius-full)", padding: "4px 10px" }}
            role="status"
            aria-label={profile.statusBadge}
          >
            <span
              className="relative flex h-2 w-2"
              aria-hidden="true"
            >
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
          </span>
        </div>

        <p
          className="font-label-md mb-3"
          style={{ color: "var(--color-architectural-ochre)", margin: "0 0 0.75rem" }}
        >
          {profile.alias}
        </p>

        <h1
          id="hero-heading"
          className="font-display mx-auto"
          style={{
            color: "var(--color-warm-cream-bright)",
            margin: "0 auto",
            maxWidth: "18ch",
          }}
        >
          {profile.name}
        </h1>

        <p
          className="font-headline-sm mx-auto"
          style={{
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-md)",
            maxWidth: "36rem",
          }}
        >
          {profile.role}
        </p>

        <p
          className="font-body-md mx-auto"
          style={{
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-md)",
            maxWidth: "40rem",
          }}
        >
          {profile.summary}
        </p>

        <div
          className="mx-auto flex flex-wrap items-center justify-center gap-3"
          style={{ marginTop: "var(--space-xl)" }}
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 font-label-md transition-colors"
            style={{
              backgroundColor: "var(--color-architectural-ochre)",
              color: "var(--color-on-primary)",
              borderRadius: "var(--radius-md)",
              padding: "0.75rem 1.25rem",
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
          >
            Explore Projects
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-label-md transition-colors"
            style={{
              backgroundColor: "var(--color-surface-substrate)",
              color: "var(--color-warm-cream)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-md)",
              padding: "0.75rem 1.25rem",
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
          >
            <Mail size={16} aria-hidden="true" />
            Get in Touch
          </a>
        </div>

        <dl
          className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            marginTop: "var(--space-2xl)",
            maxWidth: "52rem",
            borderTop: "var(--border-structural)",
            paddingTop: "var(--space-lg)",
          }}
        >
          {profile.heroStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="font-label-sm" style={{ color: "var(--color-text-muted)", margin: 0 }}>
                {stat.label}
              </dt>
              <dd
                className="font-title-md"
                style={{ color: "var(--color-warm-cream)", margin: "6px 0 0" }}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
