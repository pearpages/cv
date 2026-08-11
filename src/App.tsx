import { About } from './components/About/About';
import { Community } from './components/Community/Community';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Nav } from './components/Nav/Nav';
import { Projects } from './components/Projects/Projects';
import { References } from './components/References/References';
import { Skills } from './components/Skills/Skills';

export function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      {/* Act I sits fixed behind the document, which scrolls over it. */}
      <Hero />

      <div className="page" id="top">
        <Nav />
        <main className="shell">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Community />
          <References />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
