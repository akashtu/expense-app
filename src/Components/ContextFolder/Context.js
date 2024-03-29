import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
  // Initialize wallet and expenses state
  const [wallet, setWallet] = useState(5000);
  const [expenses, setExpenses] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [date, setDate] = useState("");
  const [expensesArray, setExpensesArray] = useState([
    {
      title: title,
      price: price,
      selectCategory: selectCategory,
      date: date,
    },
  ]);

  // useEffect to update context value when wallet or expenses change
  useEffect(() => {
    // Update the context value whenever wallet or expenses change
    // This ensures that any component consuming the context will re-render when wallet or expenses change
    setContextValue((prev) => ({
      ...prev,
      wallet,
      expenses,
      title,
      price,
      selectCategory,
      date,
      expensesArray,
    }));
  }, [wallet, expenses, title, price, selectCategory, date, expensesArray]);

  // Define the initial context value with wallet, expenses, setWallet, and setExpenses
  const initialContextValue = {
    wallet,
    expenses,
    setWallet,
    setExpenses,
    title,
    price,
    selectCategory,
    date,
    setTitle,
    setPrice,
    setDate,
    setSelectCategory,
    expensesArray,
    setExpensesArray,
  };

  // Use state to store the context value and pass it to the Provider
  const [contextValue, setContextValue] = useState(initialContextValue);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
