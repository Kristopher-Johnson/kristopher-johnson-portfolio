import ProjectElement from "./ProjectElement";
import classes from "./ProjectList.module.css";
import Sort from "../../../Function/Sort";

const ProjectList = (props) => {
  const projectList = (
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

  return (
    <section className={classes.list}>
      <ul>{projectList}</ul>
    </section>
  );
};

export default ProjectList;
