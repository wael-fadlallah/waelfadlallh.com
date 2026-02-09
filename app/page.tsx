import { Header } from "./components/header";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
    </div>
  );
}
