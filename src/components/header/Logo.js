import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <a href="/" className="logo">
      <img src={props.path} alt="Logo" />
    </a>
  );
};

export default Logo;
