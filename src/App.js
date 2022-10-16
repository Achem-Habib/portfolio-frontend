import { useState } from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import useDarkSide from "./hook/useDarkSide";

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };
  return (
    <div>
      <Navbar darkSide={darkSide} toggleDarkMode={toggleDarkMode} />
      <Home darkSide={darkSide} />
      <About />
      <Skills />
    </div>
  );
}

export default App;
