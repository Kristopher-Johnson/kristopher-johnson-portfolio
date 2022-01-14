import ProjectList from "./ProjectList";
import ProjectListDescription from "./ProjectListDescription";
import classes from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div className={classes.projects}>
      <ProjectListDescription />
      <ProjectList />
    </div>
  );
};

export default Projects;
