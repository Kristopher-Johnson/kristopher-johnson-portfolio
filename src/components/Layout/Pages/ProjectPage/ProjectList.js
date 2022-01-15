import ProjectElement from "./ProjectElement";
import classes from "./ProjectList.module.css";
import Sort from "../../../Function/Sort";
import React from "react";

const ProjectList = React.forwardRef((props, ref) => {
  let projectList = (
    <Sort sort={props.sortFilter}>
      {props.DUMMY_PROJECTS.map((project) => (
        <ProjectElement
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          language={project.language}
          image={project.image}
        />
      ))}
    </Sort>
  );

  // if (projectList == null) {
  //   console.log();
  //   projectList = <ProjectElement key={"empty"} />;
  // }

  return (
    <section className={classes.list}>
      <ul>
        {projectList}
        <div className={classes.width} />
        {/* <ProjectElement
          key={"empty"}
          id={"empty"}
          name={"empty"}
          description={
            "This is a description about this project which is a student marks calculator, this program calculates student grades based on the input."
          }
          language={[]}
          image={
            "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
          }
          className={classes.empty}
        /> */}
      </ul>
    </section>
  );
});

export default ProjectList;
