import classes from "./Article.module.css";

const Article = (props) => {
  const content = () => {
    if (props.imagePos === "left") {
      return (
        <div className={classes.content}>
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
          <article className={classes.article}>{props.children}</article>
        </div>
      );
    }
    if (props.imagePos === "right") {
      return (
        <div className={classes.content}>
          <article className={classes.article}>{props.children}</article>
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
    return <div />;
  };

  return content();
};
export default Article;
