import React from "react";
import "./BoxBottom.css";
import { BoxLeft } from "./BoxlLeft/BoxLeft";
export const BoxBottom = () => {
  return (
    <div className="boxbottom-container">
      <h1>Recent Transactions</h1>
      <BoxLeft />
    </div>
  );
};
