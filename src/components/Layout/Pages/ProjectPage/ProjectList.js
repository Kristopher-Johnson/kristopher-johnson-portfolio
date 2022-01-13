import ProjectElement from "./ProjectElement";
import Card from "../../../UI/Card";
import classes from "./ProjectList.module.css";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    name: "Student Mark Calculator",
    description: "Student Mark Calculator",
    language: "Java",
    image: "",
  },
  {
    id: "p2",
    name: "Hotel Managment System",
    description: "Hotel Managment System",
    language: "Java",
    image: "",
  },
  {
    id: "p3",
    name: "Student Support Application",
    description: "Student Support Application",
    language: "Java, Junit",
    image: "",
  },
  {
    id: "p4",
    name: "Website about HTML + CSS",
    description: "Website about HTML + CSS",
    language: "HTML, CSS, JavaScript",
    image: "",
  },
];

const ProjectList = (props) => {
  const projectList = DUMMY_PROJECTS.map((project) => (
    <ProjectElement
      key={project.id}
      id={project.id}
      name={project.name}
      description={project.description}
      language={project.language}
      image={project.image}
    />
  ));

  return (
    <section>
      <ul className="classes.list">{projectList}</ul>
    </section>
  );
};

export default ProjectList;
