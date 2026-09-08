import { useLocale, type Locale } from "@/i18n"

const toggleStyle = {
  borderRadius: "var(--radius-md)",
  border: "var(--border-structural)",
  backgroundColor: "var(--color-elevated-plate)",
  boxShadow: "var(--shadow-tactile-inset)",
  padding: "2px",
  display: "inline-flex",
  gap: "2px",
} as const

function LanguageButton({
  active,
  label,
  ariaLabel,
  onClick,
}: {
  active: boolean
  label: string
  ariaLabel: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
      className="font-label-sm"
      style={{
        minWidth: "2.25rem",
        height: "1.85rem",
        border: "none",
        borderRadius: "calc(var(--radius-md) - 2px)",
        cursor: "pointer",
        backgroundColor: active ? "var(--color-architectural-ochre)" : "transparent",
        color: active ? "var(--color-on-primary)" : "var(--color-text-secondary)",
        boxShadow: active ? "var(--shadow-button-bevel)" : "none",
        transition: "background-color 160ms ease, color 160ms ease",
      }}
    >
      {label}
    </button>
  )
}

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  function select(next: Locale) {
    setLocale(next)
  }

  return (
    <div role="group" aria-label={t.language.groupLabel} style={toggleStyle}>
      <LanguageButton
        active={locale === "es"}
        label={t.language.es}
        ariaLabel={t.language.switchToEs}
        onClick={() => select("es")}
      />
      <LanguageButton
        active={locale === "en"}
        label={t.language.en}
        ariaLabel={t.language.switchToEn}
        onClick={() => select("en")}
      />
    </div>
  )
}
