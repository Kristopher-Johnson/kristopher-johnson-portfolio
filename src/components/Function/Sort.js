import React from "react";
import ProjectElement from "../Layout/Pages/ProjectPage/ProjectElement";

// Compare function needed by the Sort component
const filter = (list, by) => {
  // you can access the relevant property like this a.props[by]
  // depending whether you are sorting by tilte or year, you can write a compare function here,
  let projectList = [];
  let i = 0;
  while (i < list.length) {
    if (list[i].props.language.includes(by)) {
      projectList.push(list[i]);
    }
    i++;
  }

  return projectList;
};

const Sort = (props) => {
  //   return props.children;
  if (props.by === "All") {
    return props.children;
  }
  return filter(props.children, props.by);
};

export default Sort;
