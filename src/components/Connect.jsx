import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Connect = () => {
  return (
    <div>
      <h4>Connect with me!</h4>
      <a href="https://github.com/tylerjensen12"
      target="_blank"
      rel="noreferrer">
        <BsGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/tylerjensen12/"
      target="_blank"
      rel="noreferrer">
        <BsLinkedin className="icon" />
      </a>
    </div>
  );
};

export default Connect;
