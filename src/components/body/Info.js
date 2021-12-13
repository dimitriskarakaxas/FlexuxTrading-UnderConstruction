import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: enteredEmail }),
    };

    try {
      const response = await fetch(
        "https://shrouded-shore-56422.herokuapp.com/subscribe",
        fetchOptions
      );

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }

    setEnteredEmail("");
  };

  return (
    <main className="main">
      <div className="text_content">
        <p className="comming_soon">Coming Soon</p>
        <h1 className="title">ADVANCED FLEXUS PARTNERSHIP</h1>
        <p className="extra_paragraph">
          <span className="flexus_color">FLEXUS INTERNATIONAL TRADING</span> is
          a leading producer of Fine Greek Food Products <br /> under the{" "}
          <span className="terra_greca_color">TERRA GRECA</span> brand.
        </p>
      </div>
      <div className="subscription_form_wrapper">
        <form className="subscription_form" onSubmit={submitFormHandler}>
          <h2>Get Notified</h2>
          <div className="form_input--container">
            <input
              placeholder="Your Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
            <button>Notify Me</button>
          </div>
        </form>
      </div>
      <div className="text_content">
        <p className="closing_text">
          Our only criterion for selecting raw materials is quality. Welcome to
          the world of <br />
          TERRA GRECA's Pure Traditional Products.
        </p>
      </div>
    </main>
  );
};

export default Info;
