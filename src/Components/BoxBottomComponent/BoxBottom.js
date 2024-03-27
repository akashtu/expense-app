import React from "react";
import "./BoxBottom.css";
import { BoxLeft } from "./BoxlLeft/BoxLeft";
import { BoxRight } from "./BoxRight/BoxRight";
export const BoxBottom = () => {
  return (
    <div className="boxbottom-container">
      <div>
        <h1 className="boxbottom-text">Recent Transactions</h1>
        <BoxLeft />
      </div>
      <div>
        <h1 className="boxbottom-text">Top Expenses</h1>
        <BoxRight />
      </div>
    </div>
  );
};
