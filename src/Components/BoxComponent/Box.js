import React from "react";
import "./Box.css";
import { BoxTop } from "../BoxTopComponent/BoxTop";
export const Box = () => {
  return (
    <div className="box-container">
      <div className="boxtop-content">Expense Tracker</div>
      <div className="box-wrapper">
        <BoxTop />
      </div>
    </div>
  );
};
