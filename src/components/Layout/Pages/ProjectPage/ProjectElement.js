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
  console.log(height);
  console.log(width);

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
    if (width < 600) {
      return truncateText(str, 80);
    }
    if (width < 800) {
      return truncateText(str, 165);
    }
    if (width < 1000) {
      return truncateText(str, 250);
    }
    if (width >= 1000) {
      return truncateText(str, 340);
    }
  };

  const truncateTechnologies = (list) => {
    if (width < 600) {
      return truncateList(list, 3);
    }
    return truncateList(list, 5);
  };

  console.log(isExpanded);

  if (!isExpanded) {
    return (
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <Card isExpanded={isExpanded}>
          <div className={classes.outer}>
            <div className={classes.cardHeader}>
              <div className={classes.cardDescription}>
                <h3>{props.name}</h3>
                <h4 className={classes["truncate-overflow"]}>
                  {truncateDescription(props.description, height)}
                </h4>
              </div>
              <div className={classes.cardTechnologies}>
                <ul>
                  <h4>{truncateTechnologies(technologiesOptionArray)}</h4>
                </ul>
              </div>
              <div className={classes.cardImage}>
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
              <p>+</p>
            </div>
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
            <header className={styles.cardHeader}>
              <p>–</p>
              <h3>{props.name}</h3>
            </header>
            <div className={styles.cardArticle}>
              <div className={styles.cardArticleWidth}>
                <div className={styles.cardTechnologiess}>
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
                <div className={styles.cardDescription}>
                  {props.description}
                </div>
              </div>
              <div className={styles.cardImage}>
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
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default ProjectElement;
