import { useState } from "react";
import Button from "../../../UI/Buttons/Button";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(
      "https://kris-portfolio-nodejs.herokuapp.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    var form = document.getElementById("myForm");
    form.reset();
    let result = await response.json();

    alert(result.status);

    console.log(form);
  };
  return (
    <form id="myForm" onSubmit={handleSubmit} className={classes.form}>
      <header></header>
      <div className={classes.name}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className={classes.email}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className={classes.message}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <div className={classes.button}>
        <Button type="submit" variant="outlined" color="outlinedButton">
          {status}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
