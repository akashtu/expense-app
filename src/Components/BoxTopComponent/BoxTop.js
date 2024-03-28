import React from "react";
import "./BoxTop.css";
// import Example from "../PieChartComponent/PieChart";
import PieChart from "../PieChartComponent/PieChart";
import { Link } from "react-router-dom";
export const BoxTop = () => {
  return (
    <div className="boxtop-component">
      <div className="boxtop1">
        <div className="boxtop">
          <div>
            <span className="text">Wallet Balance: </span>
            <span className="price1">$4500</span>
          </div>
          <button className="income-button">
            <Link to="/addbalance">+ Add Income</Link>
          </button>
        </div>
        <div className="boxtop">
          <div>
            <span className="text">Expenses: </span>
            <span className="price2">$500</span>
          </div>
          <button className="income-button button2">
            <Link to="/addexpense">+ Add Expense</Link>
          </button>
        </div>
      </div>
      <div className="boxtop2">
        <PieChart />
      </div>
    </div>
  );
};
