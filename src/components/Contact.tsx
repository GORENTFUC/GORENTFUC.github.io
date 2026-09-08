import { useId, useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { socialLinks } from "@/data/portfolio"

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
  const formId = useId()
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Contacto portfolio — ${form.name}`)
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
        paddingInline: "var(--margin-mobile)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-content-width)" }}>
        <header style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="font-label-sm" style={{ color: "var(--color-architectural-ochre)", margin: 0 }}>
            Signal Channel
          </p>
          <h2
            id="contact-heading"
            className="font-headline-lg"
            style={{ color: "var(--color-warm-cream)", margin: "0.5rem 0 0" }}
          >
            Contacto
          </h2>
          <p className="font-body-md mt-3 max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
            Cuéntame sobre colaboraciones, oportunidades o proyectos. Respondo con precisión y sin ruido.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              backgroundColor: "var(--color-surface-substrate)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-default)",
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
                label="Nombre"
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                autoComplete="name"
                required
              />
              <Field
                id={`${formId}-email`}
                label="Email"
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
                Mensaje
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                placeholder="Describe el contexto, alcance y timeline..."
                className="w-full resize-y"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  color: "var(--color-text-primary)",
                  border: "var(--border-structural)",
                  borderRadius: "var(--radius-default)",
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
                className="inline-flex items-center gap-2 font-label-md"
                style={{
                  backgroundColor: "var(--color-architectural-ochre)",
                  color: "var(--color-on-primary)",
                  border: "none",
                  borderRadius: "var(--radius-default)",
                  padding: "0.625rem 1rem",
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
                Enviar mensaje
              </button>

              {submitted ? (
                <p
                  id={`${formId}-success`}
                  className="font-body-sm"
                  style={{ color: "var(--color-muted-earth-olive)", margin: 0 }}
                  role="status"
                >
                  Abriendo tu cliente de correo…
                </p>
              ) : null}
            </div>
          </form>

          <aside
            aria-label="Redes sociales"
            style={{
              backgroundColor: "var(--color-elevated-plate)",
              border: "var(--border-structural)",
              borderRadius: "var(--radius-default)",
              padding: "var(--space-lg)",
              height: "fit-content",
            }}
          >
            <h3 className="font-title-md" style={{ color: "var(--color-warm-cream)", marginTop: 0 }}>
              Canales directos
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-sm)" }}>
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.platform === "email" ? undefined : "_blank"}
                    rel={link.platform === "email" ? undefined : "noreferrer"}
                    className="font-label-md inline-flex"
                    style={{ color: "var(--color-text-secondary)" }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "var(--color-architectural-ochre-hover)"
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = "var(--color-text-secondary)"
                    }}
                    aria-label={`Abrir ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
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
          borderRadius: "var(--radius-default)",
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
