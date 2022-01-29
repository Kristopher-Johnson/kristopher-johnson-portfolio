import ProjectList from "./ProjectList";
import ProjectListDescription from "./ProjectListDescription";
import classes from "./Projects.module.css";
import { useState, useEffect } from "react";

import database from "../../../../databaseConfig";

const Projects = (props) => {
  const [listFilter, setListFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [thisFilter, setThisFilter] = useState(true);

  const [PROJECT_DATA, setPROJECT_DATA] = useState([]);
  useEffect(() => {
    const ref = database.ref("0/value");
    const listener = ref.on("value", (snapshot) => {
      const fetchedProjects = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedProjects.push({ id: key, ...data });
      });
      setPROJECT_DATA(fetchedProjects);
    });
    return () => ref.off("value", listener);
  }, [props]);

  // console.log(PROJECT_DATA);

  // let projects = [];
  // database.ref("0/value").on("value", function (snapshot) {
  //   projects = snapshot.val();
  // });
  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // });

  // function jsonProjects() {
  //   return JSON.parse(localStorage.getItem("projects"));
  // }
  const sortList = (language) => {
    setListFilter(language);
    setThisFilter(true);
  };

  const searchList = (query) => {
    setSearchFilter(query);
    setThisFilter(false);
  };

  const whichFilter = () => {
    if (thisFilter) {
      // console.log(thisFilter);
      return [true, listFilter];
    } else {
      // console.log(thisFilter);
      return [false, searchFilter];
    }
  };

  return (
    <div className={classes.projects}>
      <div className={classes.inline}>
        <ProjectListDescription
          onSort={sortList}
          onSearch={searchList}
          DUMMY_PROJECTS={PROJECT_DATA}
        />

        <ProjectList sortFilter={whichFilter()} DUMMY_PROJECTS={PROJECT_DATA} />
      </div>
    </div>
  );
};

export default Projects;
