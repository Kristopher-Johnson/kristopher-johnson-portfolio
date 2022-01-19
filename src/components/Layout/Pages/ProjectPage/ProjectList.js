import ProjectElement from "./ProjectElement";
import Sort from "../../../Function/Sort";

const ProjectList = (props) => {
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
          technologies={project.technologies}
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
};

export default ProjectList;
