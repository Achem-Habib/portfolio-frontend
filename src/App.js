import { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
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
      <Works />
      <Contact />
    </div>
  );
}

export default App;
