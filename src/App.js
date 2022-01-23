import Header from "./components/Layout/Header";
// import { Fragment } from "react";
import HomePage from "./components/Layout/Pages/Homepage/HomePage";
import Projects from "./components/Layout/Pages/ProjectPage/Projects";
import Contact from "./components/Layout/Pages/ContactPage/Contact";
import classes from "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header className={classes.header}>
        <Header />
      </header>

      <article className={classes.class}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </article>
      {/* <Projects></Projects> */}
    </div>
  );
}

export default App;
