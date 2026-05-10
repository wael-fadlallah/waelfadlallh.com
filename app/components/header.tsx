import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#toolbox", label: "Toolbox" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="nav">
      <Link className="brand" href="#top" aria-label="Wael Fadlallh, home">
        <span className="brand__logo" aria-hidden="true">
          <span className="brand__chev">&gt;</span>
          <span className="brand__cursor">_</span>
        </span>
        <span className="brand__name">Wael Fadlallh</span>
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <ThemeToggle />
        <a className="contact-pill" href="mailto:wael.fudlallah@gmail.com">
          <span className="contact-pill__dot" aria-hidden="true" />
          <span>Available</span>
        </a>
      </div>
    </header>
  );
}
