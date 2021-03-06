import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <h2 className="section-title">Reach Out</h2>
      <div>
        <address>
          Email:
          <a href="mailto:kelseyalderman@gmail.com" target="blank">
            {" "}
            kelseyalderman@gmail.com
          </a>
          <br />
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/kelsey-alderman-79019922b/"
            target="blank"
          >
            {" "}
            Kelsey Alderman
          </a>
          <br />
          GitHub:
          <a href="https://github.com/kelseyalderman" target="blank">
            {" "}
            kelseyalderman
          </a>
        </address>
      </div>
    </section>
  );
}

export default Contact;
