import "./App.css";
import { AddBalance } from "./Components/AddBalanceComponent/AddBalance";
import { AddExpense } from "./Components/AddExpensesComponent/AddExpense";
import { EditExpense } from "./Components/EditExpensesComponent/EditExpense";
import { Expense } from "./Components/ExpenseComponent/Expense";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./Components/ContextFolder/Context";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Expense />
          <Routes>
            <Route path="/addexpense" element={<AddExpense />} />
            <Route path="/addbalance" element={<AddBalance />} />
            <Route path="/editexpense" element={<EditExpense />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
