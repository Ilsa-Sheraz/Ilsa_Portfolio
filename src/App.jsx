import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Outro from './components/Outro'

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navbar />

      <section id="home" className="min-h-screen snap-start">
        <Hero />
      </section>

      <section id="about" className="min-h-screen snap-start">
        <About />
      </section>

      <section id="education" className="min-h-screen snap-start">
        <Education />
      </section>

      <section id="skills" className="min-h-screen snap-start">
        <Skills />
      </section>

      <section id="experiences" className="min-h-screen snap-start">
        <Experience />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>

      <section id="outro" className="min-h-screen snap-start">
        <Outro />
      </section>
    </div>
  );
}

export default App;
