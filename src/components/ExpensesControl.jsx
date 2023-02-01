import {useEffect, useState} from 'react'

const ExpensesControl = ({budget, expenses}) => {
    const [available, setAvailable] = useState(0)
    const [spend, setSpend] = useState(0)

    useEffect(() => {
        const totalSpend = expenses.reduce((total, expense) => Number(expense.quantity) + Number(total), 0);
        const budgetAvailable = budget - totalSpend
        console.log(totalSpend)
        setSpend(totalSpend)
        setAvailable(budgetAvailable)
    }, [expenses])

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
            <p><span>Available: </span>{formatBudget(available)}</p>
            <p><span>Spend: </span>{formatBudget(spend)}</p>
        </div>
    </div>
  )
}

export default ExpensesControl