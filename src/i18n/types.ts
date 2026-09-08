export type Locale = "es" | "en"

export const LOCALES = ["es", "en"] as const

export const DEFAULT_LOCALE: Locale = "es"

export const LOCALE_STORAGE_KEY = "jsgor-locale"

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en"
}
