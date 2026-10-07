export function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} Wael Fadlallh</span>
      <span className="foot__sep" aria-hidden="true" />
      <span>Made in Dubai, with Next.js</span>
    </footer>
  );
}
