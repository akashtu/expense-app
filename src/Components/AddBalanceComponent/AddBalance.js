import React, { useState } from "react";
import "./AddBalance.css";
import { useContext } from "react";
import { Context } from "../ContextFolder/Context";
export const AddBalance = () => {
  const [income, setIncome] = useState("");
  const [display, setDisplay] = useState(true);
  const { wallet, setWallet } = useContext(Context);
  const handleAmountUpdate = (e) => {
    e.preventDefault();
    setWallet(wallet + Number(income));
  };
  const cancelComponent = () => {
    setDisplay(false);
  };
  return (
    <div>
      {display ? (
        <div className="addbalance-container">
          <h1>Add Balance</h1>
          <div className="addbalance_div">
            <form className="balance_form">
              <input
                type="number"
                value={income}
                placeholder="Income Amount"
                onChange={(e) => setIncome(e.target.value)}
              />
              <button onClick={handleAmountUpdate}>Add Balance</button>
              <button onClick={cancelComponent}>Cancel</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
