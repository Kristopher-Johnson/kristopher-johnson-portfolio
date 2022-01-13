import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
// import HomePage from "./components/Layout/Pages/Homepage/HomePage";
// import ProjectElement from "./components/Layout/Pages/ProjectPage/ProjectElement";
// import ProjectList from "./components/Layout/Pages/ProjectPage/ProjectList";
import Projects from "./components/Layout/Pages/ProjectPage/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Projects />
    </Fragment>
  );
}

export default App;
