import React from "react";
import "./BoxTop.css";
export const BoxTop = () => {
  return (
    <div className="boxtop-component">
      <div className="boxtop1">
        <div className="boxtop">
          <div>
            <span className="text">Wallet Balance: </span>
            <span className="price1">$4500</span>
          </div>
          <button className="income-button">+ Add Income</button>
        </div>
        <div className="boxtop">
          <div>
            <span className="text">Expenses: </span>
            <span className="price2">$500</span>
          </div>
          <button className="income-button button2">+ Add Expense</button>
        </div>
      </div>
      <div className="boxtop2">Pie Chart</div>
    </div>
  );
};
