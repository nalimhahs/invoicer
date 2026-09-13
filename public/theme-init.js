;(function () {
  try {
    var stored = window.localStorage.getItem("theme")
    var theme =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system"
    var resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme
    var root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolved)
  } catch {
    // Ignore storage access errors during first paint.
  }
})()
