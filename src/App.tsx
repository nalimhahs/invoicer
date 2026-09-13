import { ThemeToggle } from "@/components/theme-toggle"

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground antialiased">
      <header className="flex h-16 items-center justify-between px-8 md:px-16">
        <p className="text-[11px] font-medium tracking-[0.28em] text-foreground uppercase">
          Invoicer
        </p>
        <ThemeToggle />
      </header>

      <main className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-8 pb-28 md:px-16">
        <div className="max-w-lg">
          <h1 className="text-[2.75rem] leading-[1.08] font-medium tracking-[-0.04em] text-foreground sm:text-5xl">
            Invoices, without the noise.
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-muted-foreground">
            A quiet workspace for billing. The rest of the product will live
            here.
          </p>
        </div>
      </main>
    </div>
  )
}
