import classes from "./ProjectListDescription.module.css";
import { useState } from "react";

const ProjectListDescription = (props) => {
  return (
    <div className={classes.section}>
      <div className={classes.inputs}>
        <input type="text" id="Search" defaultValue="Search" name="Search" />
        <select onChange={(event) => props.onSort(event.target.value)}>
          <option>All</option>
          <option>Java</option>
          <option>React</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>C</option>
        </select>
      </div>
    </div>
  );
};
export default ProjectListDescription;
