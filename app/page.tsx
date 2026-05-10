import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { SelectedWork } from "./components/selected-work";
import { Toolbox } from "./components/toolbox";
import { Recognition } from "./components/recognition";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SelectedWork />
        <Toolbox />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
