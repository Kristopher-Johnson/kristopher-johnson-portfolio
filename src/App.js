import Header from "./components/Layout/Header";
import { Fragment } from "react";
import HomePage from "./components/Layout/Pages/Homepage/HomePage";
import Projects from "./components/Layout/Pages/ProjectPage/Projects";
import About from "./components/Layout/Pages/AboutPage/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Projects></Projects> */}
    </Fragment>
  );
}

export default App;
