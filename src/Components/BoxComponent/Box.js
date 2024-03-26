import React from "react";
import "./Box.css";
import { BoxTop } from "../BoxTopComponent/BoxTop";
import { BoxBottom } from "../BoxBottomComponent/BoxBottom";
export const Box = () => {
  return (
    <div className="box-container">
      <div className="boxtop-content">Expense Tracker</div>
      <div className="box-wrapper">
        <BoxTop />
        <BoxBottom />
      </div>
    </div>
  );
};
