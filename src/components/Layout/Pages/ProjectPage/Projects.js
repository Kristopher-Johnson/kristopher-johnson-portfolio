import ProjectList from "./ProjectList";
import ProjectListDescription from "./ProjectListDescription";
import classes from "./Projects.module.css";
import Sort from "../../../Function/Sort";
import { useState } from "react";

const Projects = (props) => {
  const [listFilter, setListFilter] = useState("All");

  const sortList = (language) => {
    setListFilter(language);
  };

  return (
    <div className={classes.projects}>
      <ProjectListDescription onSort={sortList} />

      <ProjectList filter={listFilter} />
    </div>
  );
};

export default Projects;
