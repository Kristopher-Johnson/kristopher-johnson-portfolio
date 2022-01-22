import classes from "./HomePage.module.css";

const Article = (props) => {
  const content = () => {
    console.log("here");
    if (props.imagePos === "left") {
      return (
        <div className={classes["content-first"]}>
          <img
            src={props.imgSrc}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
            }}
            className={classes["profile-img"]}
          />
          <article>
            <p>{props.children}</p>
          </article>
        </div>
      );
    }
    if (props.imagePos === "right") {
      return (
        <div className={classes["content-first"]}>
          <article>
            <p>{props.children}</p>
          </article>
          <img
            src={props.imgSrc}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
            }}
            className={classes["profile-img"]}
          />
        </div>
      );
    }
    console.log("here");
    return <div />;
  };

  return content();
};
export default Article;
