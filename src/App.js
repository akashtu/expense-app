import "./App.css";
import { AddBalance } from "./Components/AddBalanceComponent/AddBalance";
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
          <Route path="/addbalance" element={<AddBalance />} />
          <Route path="/addexpense" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
