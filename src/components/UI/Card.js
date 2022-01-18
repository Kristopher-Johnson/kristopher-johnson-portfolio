import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <form>
      <div className={!props.isExpanded ? classes.card : classes.cardExpanded}>
        {props.children}
      </div>
    </form>
  );
};
export default Card;
