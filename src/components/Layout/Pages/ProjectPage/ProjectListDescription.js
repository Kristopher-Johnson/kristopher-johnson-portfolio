import classes from "./ProjectListDescription.module.css";

const ProjectListDescription = (props) => {
  return (
    <div className={classes.section}>
      <div className={classes.inputs}>
        <input type="text" id="Search" defaultValue="Search" name="Search" />
        <select>
          <option>All</option>
          <option>Java</option>
          <option>React</option>
          <option>HTML + CSS + JavaScript</option>
          <option>C</option>
        </select>
      </div>
    </div>
  );
};
export default ProjectListDescription;
