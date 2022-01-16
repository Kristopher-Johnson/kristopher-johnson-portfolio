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
      "This is a description about this project which is a student marks calculator, this program calculates student grades based on the input. I am now adding some more description to test the truncate text withing the project element component this is just a tast i need these work to see how the element looks when i have lots of charactor it should truncate in this description exceeds 200 charactor cuurrently.",
    language: ["HTML", "CSS", "JavaScript", "C", "Ruby", "C++", "C", "test"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Frank_Mcgee_photo.jpg",
  },
  {
    id: "p2",
    name: "Hotel Managment System",
    description: "Hotel Managment System",
    language: ["Java"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Catedral_de_San_Juan%2C_Breslavia%2C_Polonia%2C_2017-12-20%2C_DD_09-11_HDR.jpg/2880px-Catedral_de_San_Juan%2C_Breslavia%2C_Polonia%2C_2017-12-20%2C_DD_09-11_HDR.jpg",
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
