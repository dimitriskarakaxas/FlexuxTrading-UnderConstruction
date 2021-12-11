import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <main className="main">
      <div className="text_content">
        <p className="comming_soon">Coming Soon</p>
        <h1 className="title">What the News Today?</h1>
        <p className="extra_paragraph">
          Discover and The Read The Latest News & Insight Article <br />
          From All Around The World
        </p>
      </div>
      <div className="subscription_form_wrapper">
        <form className="subscription_form">
          <h2>Get Notified</h2>
          <div className="form_input--container">
            <input placeholder="Your Email" />
            <button>Notify Me</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Info;
