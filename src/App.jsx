import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "./components";
import GitNodesBackground from "./components/ui/GitNodesBackground";
import WhatsAppHelp from "./components/ui/WhatsAppHelp";

function App() {
  return (
    <div className="bg-surface-900 text-text-primary min-h-screen relative transition-colors duration-300 overflow-x-hidden">
      <GitNodesBackground />
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none z-[2]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppHelp />
    </div>
  );
}

export default App;
