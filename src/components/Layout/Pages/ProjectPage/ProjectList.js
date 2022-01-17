import ProjectElement from "./ProjectElement";
import classes from "./ProjectList.module.css";
import Sort from "../../../Function/Sort";
import React, { useState, useRef, useEffect } from "react";
import { Container, SearchInput } from "../../../UI/Styles";

const ProjectList = React.forwardRef((props, ref) => {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showExpanded = isHovered || isFocused;

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
        />
      ))}
    </Sort>
  );

  // if (projectList == null) {
  //   console.log();
  //   projectList = <ProjectElement key={"empty"} />;
  // }

  useEffect(() => {
    targetRef.current.value = "";
  }, [showExpanded]);

  return (
    // <section className={classes.list}>

    <ul>
      {projectList}
      {/* <div className={classes.width} /> */}
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showExpanded}
      >
        <SearchInput ref={targetRef} showExpanded={showExpanded} />
      </Container>
    </ul>
    // </section>
  );
});

export default ProjectList;
