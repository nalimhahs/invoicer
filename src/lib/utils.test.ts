import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"
import { isTheme, nextTheme } from "@/lib/theme"

describe("cn", () => {
  it("merges overlapping tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
  })
})

describe("theme helpers", () => {
  it("accepts only allowlisted theme values", () => {
    expect(isTheme("dark")).toBe(true)
    expect(isTheme("dim")).toBe(false)
    expect(isTheme(null)).toBe(false)
  })

  it("cycles system → light → dark → system", () => {
    expect(nextTheme("system")).toBe("light")
    expect(nextTheme("light")).toBe("dark")
    expect(nextTheme("dark")).toBe("system")
  })
})
