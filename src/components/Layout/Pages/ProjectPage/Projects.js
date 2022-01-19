import ProjectList from "./ProjectList";
import ProjectListDescription from "./ProjectListDescription";
import classes from "./Projects.module.css";
import { useState } from "react";
// import styled from "styled-components";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    name: "Student Mark Calculator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "C",
      "Ruby",
      "C++",
      "C",
      "test",
    ],
    tags: ["HTML", "CSS", "JavaScript", "C", "Ruby", "C++", "C", "tag"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Frank_Mcgee_photo.jpg",
    github:
      "https://github.com/Kristopher-Johnson/kristopher-johnson-portfolio/tree/master",
  },
  {
    id: "p2",
    name: "Hotel Managment System",
    description: "Hotel Managment System",
    technologies: ["Java"],
    tags: [],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Catedral_de_San_Juan%2C_Breslavia%2C_Polonia%2C_2017-12-20%2C_DD_09-11_HDR.jpg/2880px-Catedral_de_San_Juan%2C_Breslavia%2C_Polonia%2C_2017-12-20%2C_DD_09-11_HDR.jpg",
    github:
      "https://github.com/Kristopher-Johnson/kristopher-johnson-portfolio/tree/master",
  },
  {
    id: "p3",
    name: "Student Support Application",
    description: "This",
    technologies: ["Java", "Junit"],
    tags: [],
    image: "",
    github:
      "https://github.com/Kristopher-Johnson/kristopher-johnson-portfolio/tree/master",
  },
  {
    id: "p4",
    name: "Website about HTML + CSS",
    description: "Website about HTML + CSS",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: [],
    image: "",
    github:
      "https://github.com/Kristopher-Johnson/kristopher-johnson-portfolio/tree/master",
  },
  // {
  //   id: "p5",
  //   name: "test",
  //   description: "this is a test",
  //   language: ["C", "C++"],
  //   image: "",
  // },
];

const Projects = (props) => {
  const [listFilter, setListFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [thisFilter, setThisFilter] = useState(true);

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
          DUMMY_PROJECTS={DUMMY_PROJECTS}
        />

        <ProjectList
          sortFilter={whichFilter()}
          DUMMY_PROJECTS={DUMMY_PROJECTS}
        />
      </div>
    </div>
  );
};

export default Projects;
