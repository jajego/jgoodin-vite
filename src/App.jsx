import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import useLocalStorage from "use-local-storage";

function App() {
  const [mode, setMode] = useState("projects");
  // find a way to nab their os pref
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header
                  mode={mode}
                  setMode={setMode}
                  theme={theme}
                  switchTheme={switchTheme}
                />
                <Projects />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                {" "}
                <Header
                  mode={mode}
                  setMode={setMode}
                  theme={theme}
                  switchTheme={switchTheme}
                />
                <About />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
