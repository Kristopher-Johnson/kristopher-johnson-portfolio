import classes from "./ProjectElement.module.css";
import Card from "../../../UI/Card";
// import CardExpanded from "../../../UI/CardExpanded";

const ProjectElement = (props) => {
  let languages = [];

  function languageListAlphabetical(arr) {
    props.language.map((lang) => {
      if (!arr.includes(lang)) {
        arr.push(lang);
      }
    });

    return arr.sort();
  }

  let arr = [];
  console.log(languageListAlphabetical(languages));

  const languageOptionArray = languageListAlphabetical(languages).map((a) => {
    return (
      <option key={a} value={a}>
        {a}
      </option>
    );
  });

  const truncateDescription = (str) => {
    return str.length > 340 ? str.substring(0, 340) + "..." : str;
  };

  const truncateLanguages = (str) => {
    const languageListLength = 5;
    if (str.length > languageListLength) {
      str = str.slice(0, languageListLength);
      str = str.map((a) => {
        let returnValue = { ...a };
        if (a == str[str.length - 1]) {
          return (
            <li key={a.key} value={a.value}>
              {a.props.children}...
            </li>
          );
        }
        return returnValue;
      });
    }
    return str;

    // return str;
  };

  return (
    <div>
      <Card>
        <div className={classes.outer}>
          <div className={classes.cardHeader}>
            <div className={classes.cardDescription}>
              <h3>{props.name}</h3>
              <h4>{truncateDescription(props.description)}</h4>
            </div>
            <div className={classes.cardLanguages}>
              <ul>
                <h4>{truncateLanguages(languageOptionArray)}</h4>
              </ul>
            </div>
            <div className={classes.cardImage}>
              <img
                src={props.image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
                }}
                // onerror={((this.onerror = null), (this.src = "Default.jpg"))}
              />
            </div>
            <p>–+</p>
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
