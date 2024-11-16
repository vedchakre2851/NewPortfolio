import React, { useState, Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Simulate a 3-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded ? (
        <Suspense fallback={<Loading />}>
          <Loading /> {/* Show the loading component while loading */}
        </Suspense>
      ) : (
        <div
          className={`overflow-x-hidden text-gray-900 antialiased selection:bg-white selection:text-black ${
            isDarkTheme ? "text-slate-100" : "text-black"
          }`}
        >
          <div className="fixed top-0 -z-10 h-full w-full">
            {!isDarkTheme && (
              <div className="fixed inset-0 -z-10 text-slate-950 w-full h-full items-center px-5 py-24 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            )}
            {isDarkTheme && (
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            )}
          </div>

          <div className="container mx-auto px-8">
            <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Projects isDarkTheme={isDarkTheme} />
            <Experience isDarkTheme={isDarkTheme} />
            <Technologies />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
