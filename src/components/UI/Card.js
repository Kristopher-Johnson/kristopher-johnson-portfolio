import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={!props.isExpanded ? classes.card : classes.cardExpanded}>
      {props.children}
    </div>
  );
};
export default Card;
