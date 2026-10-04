import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import CurrentlyBuilding from "./sections/CurrentlyBuilding";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import GitHub from "./sections/GitHub";

function App() {
  return (
    <main className="min-h-screen bg-[#07090D] text-[#F5F5F2]">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Skills />

      <Journey />

      <CurrentlyBuilding />
      
      <GitHub />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;