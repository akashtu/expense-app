import React from "react";
import "./AddExpense.css";
export const AddExpense = () => {
  return (
    <div className="addexpense-container">
      <h1>Add Expenses</h1>
      <form>
        <div>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Price" />
        </div>
        <div>
          <input type="text" placeholder="Select Categry" />
          <input type="datetime" placeholder="dd/mm/yyyy" />
        </div>
        <div className="addexpense-button">
          <button>Add Expense</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};
