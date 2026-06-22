import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import EngineeringStack from "./pages/EngineeringStack";
import Projects from "./pages/Projects";
import Academic from "./pages/Academic";
import Achievements from "./pages/Achievements";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringStack />
        <Projects />
        <Academic />
        <Achievements />
        <Journey />
        <Contact />
      </main>

      <footer style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid var(--border)",
        color: "var(--text-dim)",
        fontSize: "0.8rem",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Designed & built by Dharssiga K · {new Date().getFullYear()}
      </footer>
    </>
  );
}