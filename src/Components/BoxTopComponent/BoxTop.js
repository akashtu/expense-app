import React, { useContext, useState } from "react";
import "./BoxTop.css";
// import Example from "../PieChartComponent/PieChart";
import PieChart from "../PieChartComponent/PieChart";
import { Link } from "react-router-dom";
import { Context } from "../ContextFolder/Context";
export const BoxTop = () => {
  // const [wallet, setWallet] = useState(5000);
  // const [expense, setExpense] = useState(0);
  const { wallet, expenses } = useContext(Context);
  const [opacity, setOpacity] = useState(true);
  const handleOpacity = () => {
    setOpacity(false);
  };
  return (
    <div className={`boxtop-component ${opacity ? "" : "opacityClass"}`}>
      <div className="boxtop1">
        <div className="boxtop">
          <div>
            <span className="text">Wallet Balance: </span>
            <span className="price1">&#8377;{wallet}</span>
          </div>
          <button className="income-button" onClick={handleOpacity}>
            <Link
              to="/addbalance"
              style={{
                listStyle: "none",
                color: "white",
                textDecoration: "none",
              }}
            >
              + Add Income
            </Link>
          </button>
        </div>
        <div className="boxtop">
          <div>
            <span className="text">Expenses: </span>
            <span className="price2">&#8377;{expenses}</span>
          </div>
          <button className="income-button button2" onClick={handleOpacity}>
            <Link
              to="/addexpense"
              style={{
                listStyle: "none",
                color: "white",
                textDecoration: "none",
              }}
            >
              + Add Expense
            </Link>
          </button>
        </div>
      </div>
      <div className="boxtop2">
        <PieChart />
      </div>
    </div>
  );
};
