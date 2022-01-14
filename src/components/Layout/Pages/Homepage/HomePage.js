import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={classes.center}>
      <div className={classes.content}>
        <p>This is some content about my page</p>
      </div>
    </div>
  );
};
export default HomePage;
