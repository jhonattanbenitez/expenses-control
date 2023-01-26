import React from 'react'

const ExpensesControl = ({budget}) => {
    const formatBudget = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='budget-container container shadow two-columns'>
        <div>
            grafica
        </div>
        <div className='budget-content'>
            <p><span>Budget: </span>{formatBudget(budget)}</p>
            <p><span>Available: </span>{formatBudget(0)}</p>
            <p><span>Balance: </span>{formatBudget(0)}</p>
        </div>
    </div>
  )
}

export default ExpensesControl