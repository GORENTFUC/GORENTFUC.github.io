import { Layers } from "lucide-react"
import { skills } from "@/data/portfolio"
import { skillIcons } from "@/components/icons"
import { useLocale } from "@/i18n"

export function SkillsInventory() {
  const { t } = useLocale()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
            <Layers size={14} aria-hidden="true" />
            {t.skills.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="font-headline-lg"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem 0 0" }}
          >
            {t.skills.title}
          </h2>
          <p
            className="font-body-md mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              marginTop: "var(--space-sm)",
              maxWidth: "36rem",
            }}
          >
            {t.skills.subtitle}
          </p>
        </header>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const copy = t.skills.byId[skill.id]
            const Icon = skillIcons[skill.id]

            return (
              <article
                key={skill.id}
                style={{
                  backgroundColor: "var(--color-surface-container)",
                  border: "var(--border-structural)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-tactile-inset)",
                  padding: "var(--space-lg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {Icon ? (
                      <span
                        className="inline-flex items-center justify-center"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: "var(--chip-featured-bg)",
                          border: "1px solid var(--chip-featured-border)",
                          color: "var(--color-architectural-ochre)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={16} />
                      </span>
                    ) : null}
                    <h3 className="font-title-md" style={{ color: "var(--color-warm-cream)", margin: 0 }}>
                      {skill.name}
                    </h3>
                  </div>
                  <span
                    className="chip-featured font-label-sm"
                    style={{ borderRadius: "var(--radius-full)", padding: "4px 10px" }}
                  >
                    Lvl {String(skill.levelValue).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className="font-label-sm"
                  style={{ color: "var(--color-architectural-ochre)", margin: 0 }}
                >
                  {copy?.category} · {copy?.level}
                </p>

                <p className="font-body-sm" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                  {copy?.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
