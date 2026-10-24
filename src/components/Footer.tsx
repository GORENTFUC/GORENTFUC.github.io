import favicon from "@/assets/JS-Favicon.svg"
import { footerSocialLinks, profile } from "@/data/portfolio"
import { SocialPlatformIcon } from "@/components/icons"
import { useLocale } from "@/i18n"

export function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full"
      style={{
        borderTop: "var(--border-structural)",
        backgroundColor: "var(--color-surface-container-lowest)",
        paddingBlock: "var(--space-xl)",
        paddingInline: "clamp(1.25rem, 4vw, 3rem)",
      }}
    >
      <div
        className="mx-auto flex w-full flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left"
        style={{ maxWidth: "var(--max-content-width)" }}
      >
        <div className="flex items-center gap-3">
          <img
            src={favicon}
            alt=""
            width={40}
            height={40}
            className="shrink-0"
            style={{ width: 40, height: 40, objectFit: "contain" }}
            aria-hidden="true"
          />
          <div className="text-left">
            <p className="font-title-md" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
              {profile.alias}
            </p>
            <p className="font-body-sm" style={{ color: "var(--color-text-muted)", margin: "6px 0 0" }}>
              {t.footer.rights(year, profile.name)}
            </p>
          </div>
        </div>

        <nav aria-label={t.footer.socialAria}>
          <ul
            className="flex flex-wrap justify-center gap-3 md:justify-start"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {footerSocialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-label-md"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--color-architectural-ochre)"
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-muted)"
                  }}
                  aria-label={link.label}
                >
                  <SocialPlatformIcon platform={link.platform} size={16} />
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
