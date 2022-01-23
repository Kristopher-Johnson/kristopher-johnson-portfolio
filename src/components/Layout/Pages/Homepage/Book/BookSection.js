import { Fragment } from "react";
import BookItem from "./BookItem";
import classes from "./BookSection.module.css";

const DUMMY_BOOKS = [
  {
    id: "b1",
    title: "The Complete Software Developer's Career Guide",
    author: "John Sonmez",
    cover: "https://images-na.ssl-images-amazon.com/images/I/71Tg5bFZrqL.jpg",
  },
  {
    id: "b2",
    title: "Grokking Artificial Intelligence Algorithms",
    author: "Rishal Hurbans",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81g6X3dWlhL.jpg",
  },
  {
    id: "b3",
    title: "The Pragmatic Programmer",
    author: "Andy Hunt and Dave Thomas",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL.jpg",
  },
];
const BookSection = () => {
  const BookList = () => {
    return (
      <Fragment>
        {DUMMY_BOOKS.map((item) => (
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
