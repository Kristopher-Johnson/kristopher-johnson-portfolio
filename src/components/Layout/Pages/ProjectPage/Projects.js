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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam libero est molestias inventore cupiditate maxime praesentium nisi! Quo pariatur, possimus asperiores repellat voluptatibus distinctio adipisci explicabo. Ipsa explicabo modi soluta, dolorum, sapiente sunt iusto libero, et pariatur temporibus iste voluptatum. Sapiente possimus, atque cumque ullam eum pariatur voluptatem suscipit sed nam autem molestiae, quaerat asperiores quidem. Consequuntur minus ratione dolore necessitatibus, illo soluta sit, dolor ea error commodi eligendi eveniet odio mollitia inventore doloremque rem accusantium temporibus modi asperiores, magni numquam perspiciatis laboriosam exercitationem! Quas itaque doloremque excepturi optio sit libero dignissimos illum cupiditate velit quod veritatis voluptates, beatae, laborum architecto placeat totam blanditiis delectus corporis explicabo culpa. Reprehenderit tempore doloremque consectetur eius. Accusantium facere dignissimos praesentium numquam pariatur ipsum voluptate error corrupti harum incidunt cumque dicta sequi optio vitae tempore hic, ullam nam? Dolore, blanditiis quisquam ea reprehenderit consectetur fuga rem, exercitationem beatae delectus commodi temporibus soluta, esse explicabo voluptatibus maxime ut quia. Labore voluptatibus pariatur cum provident vitae vero! Officiis laborum inventore sunt. Blanditiis ipsam quos nostrum officia, fugiat necessitatibus iste vitae. Non accusantium quaerat sapiente iste nesciunt obcaecati distinctio, corporis omnis? Quam reiciendis, tenetur minima natus id voluptate laboriosam ipsa fuga, maxime molestias, mollitia porro facilis ipsum.",
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
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bob_bates_2015_gdc_%28cropped%29_%28cropped%29.jpg",
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
