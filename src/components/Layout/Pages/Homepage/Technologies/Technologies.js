import classes from "./Technologies.module.css";
import { Fragment, useState, useEffect } from "react";
import TechnologyItem from "./TechnologyItem";
import database from "../../../../../databaseConfig";
// import fdsf from "../../../../assets/";

const Technologies = (props) => {
  const [TECHNOLOGY_DATA, setTECHNOLOGY_DATA] = useState([]);
  useEffect(() => {
    const ref = database.ref("1/value");
    const listener = ref.on("value", (snapshot) => {
      const fetchedTechnologies = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedTechnologies.push({ id: key, ...data });
      });
      setTECHNOLOGY_DATA(fetchedTechnologies);
    });
    return () => ref.off("value", listener);
  }, [props]);

  // console.log(TECHNOLOGY_DATA);

  const technologyList = () => {
    return (
      <Fragment>
        {TECHNOLOGY_DATA.map((item) => (
          <TechnologyItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            skill={item.skill}
            icon={item.icon}
          />
        ))}
      </Fragment>
    );
  };

  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Technologies I Use.</h1>
      <div className={classes.inner}>{technologyList()}</div>
    </div>
  );
};

export default Technologies;
