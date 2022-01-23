import classes from "./BookItem.module.css";

const BookItem = (props) => {
  return (
    <main className={classes.outer}>
      <header>
        <img
          src={props.cover}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/archive/a/ac/20070325222640%21No_image_available.svg";
          }}
          className={classes.img}
        />
      </header>
      <h1 className={classes.title}>{props.title}</h1>
      <main className={classes.body}>{props.author}</main>
    </main>
  );
};

export default BookItem;
