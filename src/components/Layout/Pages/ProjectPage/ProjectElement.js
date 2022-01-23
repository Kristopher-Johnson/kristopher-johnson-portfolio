import classes from "./ProjectElement.module.css";
import styles from "./ProjectElement-Expanded.module.css";
import Card from "../../../UI/Card";
import { useState } from "react";
// import CardExpanded from "../../../UI/CardExpanded";
import useWindowDimensions from "../../../Function/GetWindowDimensions";
import truncateText, { truncateList } from "../../../Function/TruncateText";
const ProjectElement = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { height, width } = useWindowDimensions();
  let technologiess = [];
  // console.log(height);
  // console.log(width);

  function technologiesListAlphabetical(arr) {
    props.technologies.map((lang) => {
      if (!arr.includes(lang)) {
        arr.push(lang);
      }
      return [];
    });

    return arr.sort();
  }

  const technologiesOptionArray = technologiesListAlphabetical(
    technologiess
  ).map((a) => {
    return (
      <li key={a} value={a}>
        {a}
      </li>
    );
  });

  const truncateDescription = (str) => {
    if (width < 350) {
      return truncateText(str, 170);
    }
    if (width < 400) {
      return truncateText(str, 220);
    }
    if (width < 600) {
      return truncateText(str, 300);
    }
    if (width < 800) {
      return truncateText(str, 260);
    }
    if (width < 1000) {
      return truncateText(str, 400);
    }
    if (width >= 1000) {
      return truncateText(str, 550);
    }
  };

  const truncateTechnologies = (list) => {
    // console.log("here");
    if (width < 600) {
      let truncatedList;
      if (width < 400) {
        truncatedList = truncateList(list, 4);
      } else {
        truncatedList = truncateList(list, 5);
      }
      truncatedList = truncatedList.map((li) => {
        if (li.key === truncatedList[truncatedList.length - 1].key) {
          return (
            <li key={li.key} value={li.value}>
              {li.props.children}
            </li>
          );
        }
        return (
          <li key={li.key} value={li.value}>
            {li.props.children},
          </li>
        );
      });

      return truncatedList;
    }
    return truncateList(list, 5);
  };

  // console.log(isExpanded);

  if (!isExpanded) {
    return (
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <Card isExpanded={isExpanded}>
          <div className={classes.outer}>
            <header className={classes["card-header"]}>
              <h1>{props.name}</h1>
              <p>+</p>
            </header>
            <main className={classes["card-main"]}>
              <section className={classes["card-description"]}>
                {truncateDescription(props.description, height)}
              </section>
              <section className={classes["card-list"]}>
                {truncateTechnologies(technologiesOptionArray)}
              </section>
              <img
                src={props.image}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
                }}
              />
            </main>
          </div>
        </Card>
      </div>
    );
  }
  if (isExpanded) {
    return (
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <Card isExpanded={isExpanded}>
          <div className={styles.outer}>
            <header className={styles["card-header"]}>
              <h1>{props.name}</h1>
              <p>–</p>
            </header>
            <main className={styles["card-article"]}>
              <div className={styles["card-description-width"]}>
                <div className={styles["card-technologies"]}>
                  <div>
                    <h4>Technologiess Used</h4>
                    <ul className={styles.container}>
                      <h4>{technologiesOptionArray}</h4>
                    </ul>
                  </div>

                  <div className={styles.github}>
                    <a href={props.github} target="_blank" rel="noreferrer">
                      <h4>Github</h4>
                    </a>
                  </div>
                </div>
                <div className={styles["card-description"]}>
                  {props.description}
                </div>
              </div>
              <div className={styles["card-image"]}>
                <img
                  src={props.image}
                  alt=""
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
                  }}
                />
              </div>
            </main>
          </div>
        </Card>
      </div>
    );
  }
};

export default ProjectElement;
