import { DubaiClock } from "./dubai-clock";

const FACTS = [
  { label: "Based in", value: "Dubai, UAE" },
  { label: "Currently", value: "Mashreq Bank" },
  { label: "Experience", value: "~7 years" },
  { label: "Open to", value: "Senior roles" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__meta hero__meta--top" aria-hidden="true">
        <span>{"// 01 — index"}</span>
        <DubaiClock />
      </div>

      <h1 className="hero__title">
        <span className="hero__line">Wael</span>
        <span className="hero__line hero__line--indent">
          <em>Fadlallh.</em>
        </span>
      </h1>

      <div className="hero__intro">
        <p className="hero__lede">
          Senior Front-End Engineer. I build banking apps that millions of
          people across the <em>UAE&nbsp;and Egypt</em> actually use — mostly
          in <span className="kbd">React</span>,{" "}
          <span className="kbd">React&nbsp;Native</span> and{" "}
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

      <a className="hero__cta" href="#work">
        <span>See selected work</span>
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
    </section>
  );
}
