import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [dark]);

  return (
    <main className="dark:bg-almost-black bg-light-white dark:text-light-gray">
      <Navbar dark={dark} setDark={setDark} />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
