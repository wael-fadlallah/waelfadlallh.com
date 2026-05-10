"use client";

export function ThemeToggle() {
  function toggle() {
    const next =
      document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      <svg
        className="theme-toggle__icon theme-toggle__icon--moon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M13.5 9.5A5 5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" />
      </svg>
      <svg
        className="theme-toggle__icon theme-toggle__icon--sun"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M3 13l1.4-1.4M11.6 4.4 13 3" />
      </svg>
    </button>
  );
}
