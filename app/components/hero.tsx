import { CodeEditor } from "./code-editor";
import RippleGrid from "@/components/RippleGrid";

const RIPPLE_GRID_CONFIG = {
  enableRainbow: false,
  gridColor: "#D4F34E", // --color-accent-yellow
  rippleIntensity: 0.01,
  gridSize: 15,
  gridThickness: 50,
  fadeDistance: 0.5,
  vignetteStrength: 5,
  glowIntensity: 1,
  opacity: 0.25,
  gridRotation: 0,
  mouseInteractionRadius: 2,
} as const;

export function Hero() {
  return (
    <section aria-label="Hero" className="hero-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <RippleGrid {...RIPPLE_GRID_CONFIG} mouseInteraction />
      </div>
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
              href="/docs/Wael%20Fadlallh.pdf"
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
