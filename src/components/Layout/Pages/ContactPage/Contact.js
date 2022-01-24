import ContactForm from "./ContactForm";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={classes.outer}>
      <ContactForm />
    </div>
  );
};

export default Contact;
