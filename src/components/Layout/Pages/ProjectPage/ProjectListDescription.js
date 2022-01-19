import classes from "./ProjectListDescription.module.css";
import SearchBar from "../../../Function/SearchBar";

const ProjectListDescription = (props) => {
  let technologiess = [];

  function technologiesListAlphabetical(arr) {
    props.DUMMY_PROJECTS.map((project) => {
      project.technologies.map((lang) => {
        if (!arr.includes(lang)) {
          arr.push(lang);
        }
        return [];
      });
      return [];
    });
    return arr.sort();
  }

  const technologiesOptionArray = technologiesListAlphabetical(
    technologiess
  ).map((a) => {
    return (
      <option key={a} value={a}>
        {a}
      </option>
    );
  });

  return (
    <div className={classes.section}>
      <SearchBar
        type="text"
        id="Search"
        defaultValue="Search"
        name="Search"
        onSearch={props.onSearch}
        className={classes.inputs}
      />
      <select
        className={classes.inputs}
        onChange={(event) => props.onSort(event.target.value)}
      >
        <option>All</option>
        {technologiesOptionArray}
      </select>
    </div>
  );
};
export default ProjectListDescription;
