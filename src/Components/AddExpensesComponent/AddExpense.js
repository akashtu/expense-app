import React, { useContext, useEffect, useState } from "react";
import "./AddExpense.css";
import { Context } from "../ContextFolder/Context";
export const AddExpense = () => {
  // const [expenseObj, setExpenseObj] = useState([{}]);
  const {
    wallet,
    setWallet,
    expenses,
    setExpenses,
    title,
    setTitle,
    price,
    setPrice,
    selectCategory,
    setSelectCategory,
    date,
    setDate,
    setExpensesArray,
    expenesArray,
  } = useContext(Context);

  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [selectCategory, setSelectCategory] = useState("");
  // const [date, setDate] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    setExpenses(expenses + Number(price));
    setWallet(wallet - Number(price));
    // console.log(setExpensesArray([{ title, price, selectCategory, date }]));
    console.log(expenesArray);
  };

  return (
    <div className="addexpense-container">
      <h1>Add Expenses</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Select Categry"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          />
          <input
            type="datetime"
            placeholder="dd/mm/yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="addexpense-button">
          <button onClick={handleAddExpense}>Add Expense</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};
