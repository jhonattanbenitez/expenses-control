import React from 'react';
import NewBudget from './NewBudget';
import ExpensesControl from './ExpensesControl';

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) => {
  return (
    <header>
      <h1>Expenses Control</h1>
      {isValidBudget ? (
        <ExpensesControl budget={budget} expenses={expenses} setExpenses={setExpenses} setBudget={setBudget} setIsValidBudget={setIsValidBudget}/>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
