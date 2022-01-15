import classes from "./ProjectElement.module.css";
import Card from "../../../UI/Card";

const ProjectElement = (props) => {
  // const truncate = (str) => {
  //   let i = str.length;
  //   if (textHeight > cardHeight) {
  //     while (textHeight > cardHeight) {
  //       return str.substring(0, i - 1) + "...";
  //     }
  //   } else {
  //     return str;
  //   }
  // };

  // const [cardHeight, setCardHeight] = useState(null);
  // const [cardWidth, setCardWidth] = useState(null);
  // const [textHeight, setTextHeight] = useState(null);
  // const [textWidth, setTextWidth] = useState(null);

  // console.log("Card Height: " + cardHeight);
  // console.log("Text Height: " + textHeight);
  let languages = [];
  const languageList = props.language.map((lang) => {
    if (!languages.includes(lang)) {
      languages.push(lang);

      return (
        <li key={lang} value={lang}>
          {lang}
        </li>
      );
    }
    return [];
  });

  return (
    <div className={props.className}>
      <Card>
        <div className={classes.outer} className={props.className}>
          <div className={classes.cardHeader}>
            <div className={classes.cardDescription}>
              <h3>{props.name}</h3>
              <h4>{props.description}</h4>
            </div>
            <div className={classes.cardLanguages}>
              <ul>
                <h4>{languageList}</h4>
              </ul>
            </div>
            <div className={classes.cardImage}>
              <img src={props.image} width="120" height="120" />
            </div>
            <p>+</p>
          </div>
        </div>
        {/* <div >
        
      </div>
      <li >
        <div>
          

          
        </div>
      </li> */}
      </Card>
    </div>
  );
};

export default ProjectElement;
