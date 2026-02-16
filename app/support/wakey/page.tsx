import { SupportForm } from "./support-form";

const SUPPORT_EMAIL = "wael.fudlallah@gmail.com";

export default function WakeySupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-secondary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating accent glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-accent-yellow/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-accent-orange/5 blur-[100px]" />

      <div className="relative mx-auto flex max-w-2xl flex-col px-6 py-16 sm:py-24">
        {/* Terminal-style breadcrumb */}
        <nav className="mb-12 font-mono text-xs text-text-muted">
          <span className="text-accent-yellow">~</span>
          <span className="mx-1.5">/</span>
          <span>support</span>
          <span className="mx-1.5">/</span>
          <span className="text-text-secondary">wakey-wakey</span>
          <span className="ml-1 inline-block h-3.5 w-[2px] animate-pulse bg-accent-yellow align-middle" />
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-3 font-mono text-2xl font-bold text-text-primary sm:text-3xl">
            Need a hand?
          </h1>
          <p className="max-w-lg font-body text-[15px] leading-[1.7] text-text-muted">
            Having trouble with{" "}
            <span className="font-medium text-accent-yellow">
              Wakey: Wake Up Alarms
            </span>
            ? No worries — drop us a message and we&apos;ll get back to you as
            soon as we can. Bug reports, feature ideas, or just saying hi — all
            welcome.
          </p>
        </div>

        <SupportForm />

        <p className="mt-8 font-body text-xs leading-relaxed text-text-muted/70">
          You can also reach us directly at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-text-secondary underline decoration-text-muted/30 underline-offset-2 transition-colors hover:text-accent-yellow hover:decoration-accent-yellow/30"
          >
            {SUPPORT_EMAIL}
          </a>
          . We typically respond within 24-48 hours.
        </p>
      </div>
    </main>
  );
}
