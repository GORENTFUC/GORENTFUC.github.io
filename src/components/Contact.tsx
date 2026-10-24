import { MessageSquare } from "lucide-react"
import { socialLinks } from "@/data/portfolio"
import { SocialPlatformIcon } from "@/components/icons"
import { useLocale } from "@/i18n"

export function Contact() {
  const { t } = useLocale()

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      style={{
        paddingBlock: "var(--space-3xl)",
        paddingInline: "clamp(1.25rem, 4vw, 3rem)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <header className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
          <p
            className="font-label-sm inline-flex items-center justify-center gap-2"
            style={{ color: "var(--color-architectural-ochre)", margin: 0 }}
          >
            <MessageSquare size={14} aria-hidden="true" />
            {t.contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="font-headline-lg mx-auto"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem auto 0", maxWidth: "20ch" }}
          >
            {t.contact.title}
          </h2>
          <p
            className="font-body-md mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              marginTop: "var(--space-sm)",
              maxWidth: "36rem",
            }}
          >
            {t.contact.subtitle}
          </p>
        </header>

        <aside
          aria-label={t.contact.channelsAria}
          className="mx-auto"
          style={{
            backgroundColor: "var(--color-elevated-plate)",
            border: "var(--border-structural)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-lg)",
            maxWidth: "28rem",
          }}
        >
          <h3 className="font-title-md" style={{ color: "var(--color-warm-cream)", marginTop: 0 }}>
            {t.contact.channelsTitle}
          </h3>
          <p className="font-body-sm" style={{ color: "var(--color-text-secondary)" }}>
            {t.contact.channelsBody}
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "var(--space-md) 0 0",
              padding: 0,
              display: "grid",
              gap: "var(--space-sm)",
            }}
          >
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noreferrer"}
                  className="font-label-md inline-flex items-center gap-2"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--color-architectural-ochre-hover)"
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-secondary)"
                  }}
                  aria-label={t.contact.openLinkAria(link.label)}
                >
                  <SocialPlatformIcon platform={link.platform} size={16} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
