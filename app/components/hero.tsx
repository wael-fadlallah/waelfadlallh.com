import { CodeEditor } from "./code-editor";

const _AvailableForWorkCta = () => (
  <div className="available-badge">
    <span className="pulse-dot-wrapper">
      <span className="pulse-dot-ring" />
      <span className="pulse-dot" />
    </span>
    <span className="available-badge-text">available for work</span>
  </div>
);

export function Hero() {
  return (
    <section aria-label="Hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span className="hero-heading text-text-primary">
              I craft digital experiences
            </span>
            <span className="hero-heading text-accent-yellow">
              that feel alive.
            </span>
          </h1>

          <p className="hero-description">
            Frontend engineer crafting fast, accessible, and visually compelling
            web experiences. Currently obsessed with motion, micro-interactions,
            and design systems.
          </p>

          <div className="pt-4">
            <a
              href="/docs/Wael Fadlallh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              &gt; read_cv
            </a>
          </div>
        </div>

        <CodeEditor />
      </div>
    </section>
  );
}
