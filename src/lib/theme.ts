export const THEME_STORAGE_KEY = "theme"
export const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"

export type Theme = "dark" | "light" | "system"
export type ResolvedTheme = "dark" | "light"

export function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light" || value === "system"
}

export function getSystemTheme(): ResolvedTheme {
  if (window.matchMedia(COLOR_SCHEME_QUERY).matches) {
    return "dark"
  }

  return "light"
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme
}

export function readStoredTheme(storageKey: string, fallback: Theme): Theme {
  try {
    const storedTheme = window.localStorage.getItem(storageKey)
    if (isTheme(storedTheme)) {
      return storedTheme
    }
  } catch {
    return fallback
  }

  return fallback
}

export function writeStoredTheme(storageKey: string, theme: Theme) {
  try {
    window.localStorage.setItem(storageKey, theme)
  } catch {
    // Private mode or disabled storage should not crash the tree.
  }
}

export function nextTheme(theme: Theme): Theme {
  if (theme === "system") {
    return "light"
  }

  if (theme === "light") {
    return "dark"
  }

  return "system"
}
