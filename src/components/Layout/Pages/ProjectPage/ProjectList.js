import ProjectElement from "./ProjectElement";
import classes from "./ProjectList.module.css";
import Sort from "../../../Function/Sort";
import React, { useState, useRef, useEffect } from "react";
import { Container, SearchInput } from "../../../UI/Styles";

const ProjectList = React.forwardRef((props, ref) => {
  function expandOnClick() {
    console.log("test");
  }

  let projectList = (
    <Sort sort={props.sortFilter}>
      {props.DUMMY_PROJECTS.map((project) => (
        <ProjectElement
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          language={project.language}
          tags={project.tags}
          image={project.image}
          github={project.github}
          expandOnClick={expandOnClick}
        />
      ))}
    </Sort>
  );

  // if (projectList == null) {
  //   console.log();
  //   projectList = <ProjectElement key={"empty"} />;
  // }

  return (
    // <section className={classes.list}>

    <ul>
      {projectList}
      {/* <div className={classes.width} /> */}
    </ul>
    // </section>
  );
});

export default ProjectList;
