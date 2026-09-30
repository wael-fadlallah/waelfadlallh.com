import { DubaiClock } from "./dubai-clock";

export const RESUME_HREF = "/docs/Wael%20Fadlallh.pdf";


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
          I craft the flows people use every day, and make sure nobody gets{" "}
          <em>lost</em> in them. On the web and on the phone, mostly in{" "}
          <span className="kbd">React</span>,{" "}
          <span className="kbd">React Native</span> and{" "}
          <span className="kbd">TypeScript</span>.
        </p>
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
