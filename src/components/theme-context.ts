import { createContext } from "react"

import type { ResolvedTheme, Theme } from "@/lib/theme"

export type ThemeContextValue = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

export const ThemeProviderContext = createContext<
  ThemeContextValue | undefined
>(undefined)
