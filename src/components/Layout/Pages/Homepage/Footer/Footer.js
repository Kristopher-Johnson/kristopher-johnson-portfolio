import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.margin}>
      <h1 className={classes["rainbow-text"]}>
        Thanks you for reading my portfolio, please feel free to view some of my
        projects or get in touch on the contact page!
      </h1>
    </div>
  );
};

export default Footer;
