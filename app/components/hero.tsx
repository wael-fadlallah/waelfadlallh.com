import { DubaiClock } from "./dubai-clock";

export const RESUME_HREF = "/docs/Wael%20Fadlallh.pdf";

const FACTS = [
  { label: "Based in", value: "Dubai, UAE" },
  { label: "Currently", value: "Mashreq Bank" },
  { label: "Working since", value: "2018" },
  { label: "Open to", value: "Senior roles" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__meta hero__meta--top" aria-hidden="true">
        <span>Senior Front-End Engineer</span>
        <DubaiClock />
      </div>

      <h1 className="hero__title">
        <span className="hero__line">Wael</span>
        <span className="hero__line">
          <em>Fadlallh.</em>
        </span>
      </h1>

      <div className="hero__intro">
        <p className="hero__lede">
          I build the screens people go through to open a bank account. For
          the last few years that&apos;s been at <em>Mashreq</em>, on the web
          and on the phone, mostly in <span className="kbd">React</span>,{" "}
          <span className="kbd">React Native</span> and{" "}
          <span className="kbd">TypeScript</span>.
        </p>

        <dl className="hero__facts">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__actions">
        <a className="hero__cta" href="#work">
          <span>See the work</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <a className="hero__link" href={RESUME_HREF} target="_blank" rel="noopener">
          Résumé (PDF) ↗
        </a>
      </div>
    </section>
  );
}
