import "./App.css";
import { AddExpense } from "./Components/AddExpensesComponent/AddExpense";
import { Expense } from "./Components/ExpenseComponent/Expense";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Expense />
        <Routes>
          <Route path="/addexpense" element={<AddExpense />} />
          <Route path="/addexpense" element={<AddExpense />} />
          <Route path="/addexpense" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
