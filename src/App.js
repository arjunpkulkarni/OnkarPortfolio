import Nav from "../src/components/Nav";
import Hero from "../src/pages/Hero";
import About from "../src/pages/About";
import Projects from "./pages/Projects";

import './App.css';

function App() {
  return (
    <div className="font-outfit bg-[#151312]">       
      <Nav />    
      <Hero />
      <About />
      <Projects />

    </div>
  );
}

export default App;
