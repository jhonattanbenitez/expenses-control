import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ExpensesControl = ({ budget, expenses, setBudget, setExpenses, setIsValidBudget }) => {
  const [available, setAvailable] = useState(0);
  const [spend, setSpend] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpend = expenses.reduce(
      (total, expense) => Number(expense.quantity) + Number(total),
      0
    );
    const budgetAvailable = budget - totalSpend;
    // Getting the spend percentage
    const newPercentage = (((budget - budgetAvailable) / budget) * 100).toFixed(
      2
    );
    setSpend(totalSpend);
    setAvailable(budgetAvailable);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [expenses]);

  const formatBudget = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const handleResetApp = () => {
    const result = confirm('Do you want to reset budget and expenses?')
    if (result) {
       setBudget(0);
       setExpenses([]);
       setIsValidBudget(false)
    }
  }
  return (
    <div className="budget-container container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82f6',
            trailColor: '#f5f5f5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82f6',
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>
      <div className="budget-content">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span>
          {formatBudget(budget)}
        </p>
        <p className={`${available < 0 ? 'negative' : ''}`}>
          <span>Available: </span>
          {formatBudget(available)}
        </p>
        <p>
          <span>Spent: </span>
          {formatBudget(spend)}
        </p>
      </div>
    </div>
  );
};

export default ExpensesControl;
