const filter = (list, by) => {
  let projectList = [];
  let i = 0;
  while (i < list.length) {
    if (list[i].props.technologies.includes(by)) {
      projectList.push(list[i]);
    }
    i++;
  }

  return projectList;
};

const search = (list, by) => {
  let projectList = [];
  let i = 0;
  while (i < list.length) {
    // console.log(by);
    // console.log(list[i]);

    if (
      list[i].props.name.toLowerCase().includes(by) ||
      // list[i].props.description.toLowerCase().includes(by)
      // ||
      list[i].props.technologies.find((element) => {
        // console.log(element);
        return element.toLowerCase().includes(by);
      }) ||
      list[i].props.tags.find((element) => {
        // console.log(element);
        return element.toLowerCase().includes(by);
      })
    ) {
      // console.log(list[i]);
      projectList.push(list[i]);
    }

    i++;
  }

  return projectList;
};

const Sort = (props) => {
  if (props.sort[0] === true) {
    if (props.sort[1] === "All") {
      return props.children;
    }
    return filter(props.children, props.sort[1]);
  } else {
    if (props.sort[1] === "") {
      //   console.log("here");
      return props.children;
    }
    return search(props.children, props.sort[1].toLowerCase());
  }
};

export default Sort;
