import React from 'react';
import Expense from './Expense';

const ExpensesList = ({ expenses, setEditExpense}) => {
  return (
    <div className="expenses-list container">
      <h2>{expenses.length ? 'Expenses' : 'There are not expenses yet'}</h2>
      {expenses.map((expense) => (
        <Expense expense={expense} key={expense.id} setEditExpense={setEditExpense}/>
      ))}
    </div>
  );
};

export default ExpensesList;
