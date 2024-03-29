import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Connect = () => {
  return (
    <div className="flex items-center flex-col">
      <h4>Connect with me!</h4>
      <div className="flex gap-5 mt-3 hover:drop-shadow-lg ease-in-out duration-150">
        <a
          href="https://github.com/tylerjensen12"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-10 w-10 hover:drop-shadow-lg hover:h-11 hover:w-11 duration-150" />
        </a>
        <a
          href="https://www.linkedin.com/in/tylerjensen12/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-10 w-10 hover:drop-shadow-lg hover:h-11 hover:w-11 ease-in-out duration-150" />
        </a>
      </div>
      <br></br>
      <div className="flex items-center text-white text-2xl bg-emerald-900 w-10 h-10 justify-center font-semibold rounded-2xl hidden">TJ</div>
    </div>
  );
};

export default Connect;
