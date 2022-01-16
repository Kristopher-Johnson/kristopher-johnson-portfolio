import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <form>
      <div className={classes.card}>{props.children}</div>
    </form>
  );
};
export default Card;
