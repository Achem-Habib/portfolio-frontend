import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
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
    </div>
  );
}

export default App;
