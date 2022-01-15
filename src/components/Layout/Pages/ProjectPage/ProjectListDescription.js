import classes from "./ProjectListDescription.module.css";
import SearchBar from "../../../Function/SearchBar";

const ProjectListDescription = (props) => {
  let languages = [];
  const languageList = props.DUMMY_PROJECTS.map((project) => {
    return project.language.map((lang) => {
      console.log(languages);
      if (!languages.includes(lang)) {
        languages.push(lang);
        return (
          <option key={lang} value={lang}>
            {lang}
          </option>
        );
      }
    });
  });

  const cycleThroughLanguages = () => {};

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
          {languageList}
        </select>
      </div>
    </div>
  );
};
export default ProjectListDescription;
