import classes from "./ProjectListDescription.module.css";
import SearchBar from "../../../Function/SearchBar";

const ProjectListDescription = (props) => {
  return (
    <div className={classes.section}>
      <div className={classes.inputs}>
        <SearchBar
          type="text"
          id="Search"
          defaultValue="Search"
          name="Search"
          onSearch={props.onSearch}
        />
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
