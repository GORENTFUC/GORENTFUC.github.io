import { navLinks, profile, socialLinks } from "@/data/portfolio"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: "var(--border-structural)",
        backgroundColor: "var(--color-surface-container-lowest)",
        paddingBlock: "var(--space-xl)",
        paddingInline: "clamp(1.25rem, 4vw, 3rem)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left"
        style={{ maxWidth: "var(--max-content-width)" }}
      >
        <div>
          <p className="font-title-md" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
            {profile.alias}
          </p>
          <p className="font-body-sm" style={{ color: "var(--color-text-muted)", margin: "6px 0 0" }}>
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Accesos rápidos del pie">
          <ul
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-label-md"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--color-architectural-ochre)"
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-muted)"
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Redes sociales del pie">
          <ul
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noreferrer"}
                  className="font-label-md"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--color-architectural-ochre)"
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-muted)"
                  }}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
