import { useId, useState, type FormEvent } from "react"
import { MessageSquare, Send } from "lucide-react"
import { socialLinks } from "@/data/portfolio"
import { SocialPlatformIcon } from "@/components/icons"
import { useLocale } from "@/i18n"

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
}

export function Contact() {
  const { t } = useLocale()
  const formId = useId()
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(t.contact.mailSubject(form.name))
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} <${form.email}>`)
    window.location.href = `mailto:juan.lizcano.dev@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialState)
  }

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

        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside
            aria-label={t.contact.channelsAria}
            style={{
              backgroundColor: "var(--color-elevated-plate)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-lg)",
              height: "fit-content",
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

          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              backgroundColor: "var(--color-surface-substrate)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-tactile-inset)",
              padding: "var(--space-lg)",
              display: "grid",
              gap: "var(--space-md)",
            }}
            aria-describedby={submitted ? `${formId}-success` : undefined}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id={`${formId}-name`}
                label={t.contact.name}
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                autoComplete="name"
                required
              />
              <Field
                id={`${formId}-email`}
                label={t.contact.email}
                type="email"
                value={form.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label
                htmlFor={`${formId}-message`}
                className="font-label-md mb-2 block"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {t.contact.message}
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                placeholder={t.contact.placeholder}
                className="w-full resize-y"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  color: "var(--color-text-primary)",
                  border: "var(--border-structural)",
                  borderRadius: "var(--radius-lg)",
                  padding: "0.75rem",
                  outline: "none",
                }}
                onFocus={(event) => {
                  event.currentTarget.style.border = "var(--border-focus)"
                }}
                onBlur={(event) => {
                  event.currentTarget.style.border = "var(--border-structural)"
                }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 font-label-md sm:w-auto"
                style={{
                  backgroundColor: "var(--color-architectural-ochre)",
                  color: "var(--color-on-primary)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1.25rem",
                  boxShadow: "var(--shadow-button-bevel)",
                  cursor: "pointer",
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
                <Send size={15} aria-hidden="true" />
                {t.contact.submit}
              </button>

              {submitted ? (
                <p
                  id={`${formId}-success`}
                  className="font-body-sm"
                  style={{ color: "var(--color-muted-earth-olive)", margin: 0 }}
                  role="status"
                >
                  {t.contact.success}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
  required?: boolean
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-label-md mb-2 block"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="w-full"
        style={{
          backgroundColor: "var(--color-surface-container-low)",
          color: "var(--color-text-primary)",
          border: "var(--border-structural)",
          borderRadius: "var(--radius-lg)",
          padding: "0.625rem 0.75rem",
          outline: "none",
        }}
        onFocus={(event) => {
          event.currentTarget.style.border = "var(--border-focus)"
        }}
        onBlur={(event) => {
          event.currentTarget.style.border = "var(--border-structural)"
        }}
      />
    </div>
  )
}
