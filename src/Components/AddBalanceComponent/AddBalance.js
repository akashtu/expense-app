import React from "react";
import "./AddBalance.css";
export const AddBalance = () => {
  return (
    <div className="addbalance-container">
      <h1>Add Balance</h1>
      <div className="addbalance_div">
        <form className="balance_form">
          <input type="number" placeholder="Income Amount" />
          <button>Add Balance</button>
          <button>Cancel</button>
        </form>
      </div>
    </div>
  );
};
