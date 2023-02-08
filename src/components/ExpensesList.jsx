import React from 'react';
import Expense from './Expense';

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpense,
}) => {
  return (
    <div className="expenses-list container">
      {filter ? (
        <>
          <h2>
            {filteredExpense.length
              ? 'Expenses'
              : 'There are not expenses on this category'}
          </h2>
          {filteredExpense.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          {expenses.length ? 'Expenses' : 'There are not expenses yet'}
          {expenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
