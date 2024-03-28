import React, { useState } from "react";
import "./ExpenseTracker.css"; // Import the CSS file

const ExpenseTracker = () => {
  const initialExpenses = [
    { id: 1, title: "Groceries", amount: 50.0, date: "2023-01-01" },
    { id: 2, title: "Utilities", amount: 80.0, date: "2023-01-02" },
    { id: 3, title: "Dinner", amount: 30.0, date: "2023-01-03" },
    { id: 4, title: "Movies", amount: 25.0, date: "2023-01-04" },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);
  const [newExpense, setNewExpense] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (newExpense && amount) {
      const newExpenseItem = {
        id: expenses.length + 1,
        title: newExpense,
        amount: parseFloat(amount),
        date: new Date().toLocaleDateString(),
      };

      setExpenses([...expenses, newExpenseItem]);
      setNewExpense("");
      setAmount("");
    }
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    setNewExpense(e.target.value);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-tracker-container">
      <h2>Expense Tracker</h2>

      <div className="expense-form">
        <label htmlFor="expense">Expense:</label>
        <input
          type="text"
          id="expense"
          value={newExpense}
          onChange={changeHandler}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>

      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span>{expense.title}</span>
            <span>${expense.amount}</span>
            <span>{expense.date}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
