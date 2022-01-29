import { Fragment, useState, useEffect } from "react";
import BookItem from "./BookItem";
import classes from "./BookSection.module.css";
import database from "../../../../../databaseConfig";

const BookSection = (props) => {
  const [BOOK_DATA, setBOOK_DATA] = useState([]);
  useEffect(() => {
    const ref = database.ref("2/value");
    const listener = ref.on("value", (snapshot) => {
      const fetchedBooks = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedBooks.push({ id: key, ...data });
      });
      setBOOK_DATA(fetchedBooks);
    });
    return () => ref.off("value", listener);
  }, [props]);

  // console.log(BOOK_DATA);

  const BookList = () => {
    return (
      <Fragment>
        {BOOK_DATA.map((item) => (
          <BookItem
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            cover={item.cover}
          />
        ))}
      </Fragment>
    );
  };
  return (
    <div className={classes.outer}>
      <h1 className={classes.title}>Books Im Currently Reading.</h1>
      <div className={classes.inner}>{BookList()}</div>
    </div>
  );
};

export default BookSection;
