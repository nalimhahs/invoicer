import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, beforeEach } from "vitest"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/hooks/use-theme"
import { THEME_STORAGE_KEY } from "@/lib/theme"

function ThemeLabel() {
  const { theme } = useTheme()
  return <span>theme:{theme}</span>
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.className = ""
  })

  it("defaults to system and applies the light class when matchMedia is light", () => {
    render(
      <ThemeProvider>
        <ThemeLabel />
      </ThemeProvider>
    )

    expect(screen.getByText("theme:system")).toBeInTheDocument()
    expect(document.documentElement.classList.contains("light")).toBe(true)
  })

  it("does not throw when localStorage is unavailable", () => {
    const getItem = window.localStorage.getItem.bind(window.localStorage)
    window.localStorage.getItem = () => {
      throw new Error("blocked")
    }

    expect(() =>
      render(
        <ThemeProvider>
          <ThemeLabel />
        </ThemeProvider>
      )
    ).not.toThrow()

    window.localStorage.getItem = getItem
  })

  it("cycles theme from the visible toggle and persists it", async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider>
        <ThemeToggle />
        <ThemeLabel />
      </ThemeProvider>
    )

    const toggle = screen.getByRole("button", { name: /theme system/i })
    await user.click(toggle)

    expect(screen.getByText("theme:light")).toBeInTheDocument()
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light")
    expect(document.documentElement.classList.contains("light")).toBe(true)
  })
})
