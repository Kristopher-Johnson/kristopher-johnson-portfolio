import ProjectList from "./ProjectList";
import ProjectListDescription from "./ProjectListDescription";
import classes from "./Projects.module.css";
import { useState } from "react";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    name: "Student Mark Calculator",
    description: "Student Mark Calculator",
    language: ["Java"],
    image: "",
  },
  {
    id: "p2",
    name: "Hotel Managment System",
    description: "Hotel Managment System",
    language: ["Java"],
    image: "",
  },
  {
    id: "p3",
    name: "Student Support Application",
    description: "This",
    language: ["Java", "Junit"],
    image: "",
  },
  {
    id: "p4",
    name: "Website about HTML + CSS",
    description: "Website about HTML + CSS",
    language: ["HTML", "CSS", "JavaScript"],
    image: "",
  },
];

const Projects = (props) => {
  const [listFilter, setListFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [thisFilter, setThisFilter] = useState(true);

  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const [searchQuery, setSearchQuery] = useState(query || "");

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

  // const searchProjects = (projects, query) => {
  //   if (!query) {
  //     return projects;
  //   }

  //   return projects.filter((project) => {
  //     const projectName = project.name.toLowerCase();
  //     return projectName.includes(query);
  //   });
  // };

  return (
    <div className={classes.projects}>
      <ProjectListDescription onSort={sortList} onSearch={searchList} />

      <ProjectList sortFilter={whichFilter()} DUMMY_PROJECTS={DUMMY_PROJECTS} />
    </div>
  );
};

export default Projects;
