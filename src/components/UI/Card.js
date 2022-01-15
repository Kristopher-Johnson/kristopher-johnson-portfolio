import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card} ref={props.getDimensions}>
      {props.children}
    </div>
  );
};
export default Card;
