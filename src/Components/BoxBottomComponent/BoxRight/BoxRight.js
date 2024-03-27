import React from "react";
import "./BoxRight.css";
export const BoxRight = () => {
  return (
    <div className="boxright-container">
      <div className="enter-div">
        <span>Entertainment: </span>
        <span className="progress-bar"></span>
      </div>
      <div className="enter-div">
        <span>Food: </span>
        <span className="progress-bar progress1"></span>
      </div>
      <div className="enter-div">
        <span>Travel: </span>
        <span className="progress-bar progress2"></span>
      </div>
    </div>
  );
};
