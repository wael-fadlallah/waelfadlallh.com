import { RESUME_HREF } from "./hero";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/wael-fadl-allah/",
    label: "LinkedIn ↗",
    external: true,
  },
  {
    href: "https://github.com/wael-fadlallah",
    label: "GitHub ↗",
    external: true,
  },
  { href: RESUME_HREF, label: "Résumé (PDF) ↗", external: true },
  { href: "tel:+971523485231", label: "+971 52 348 5231", external: false },
];

export function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="section__index">04</span>
      <p className="contact__lede">
        Building something people will use every day?
        <br />
        I&apos;d like to hear about it.
      </p>
      <a className="contact__email" href="mailto:wael.fudlallah@gmail.com">
        <span className="contact__email-text">wael.fudlallah@gmail.com</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <ul className="contact__links" aria-label="Elsewhere">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
