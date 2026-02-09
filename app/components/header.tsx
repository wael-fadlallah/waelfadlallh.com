import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-bg-card">
      <nav
        className="mx-auto flex max-w-300 items-center justify-between px-10 h-18"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-xl font-bold text-accent-yellow">
            &gt;_
          </span>
          <span className="font-mono text-base font-medium text-text-primary">
            Wael
          </span>
          <span
            className="inline-block h-4 w-2 animate-pulse bg-accent-yellow"
            aria-hidden="true"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/wael-fadl-allah/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          $ hire_me
        </Link>
      </nav>
    </header>
  );
}
