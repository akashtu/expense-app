import React from "react";
import "./EditExpense.css";
export const EditExpense = () => {
  return (
    <div className="addexpense-container">
      <h1>Edit Expenses</h1>
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
          <button>Edit Expense</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};
