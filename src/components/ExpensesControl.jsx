import {useEffect, useState} from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ExpensesControl = ({budget, expenses}) => {
    const [available, setAvailable] = useState(0)
    const [spend, setSpend] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpend = expenses.reduce((total, expense) => Number(expense.quantity) + Number(total), 0);
        const budgetAvailable = budget - totalSpend
        // Getting the spend percentage
        const newPercentage = (((budget - budgetAvailable) / budget) * 100).toFixed(2)
        setSpend(totalSpend)
        setAvailable(budgetAvailable)
        setTimeout(()=> {
            setPercentage(newPercentage)
        }, 1000)
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
            <CircularProgressbar 
            styles={buildStyles({
                pathColor: "#3B82f6",
                trailColor: "#f5f5f5",
                textColor: "#3B82f6"
            })}
                value={percentage}
                text={`${percentage}% expend`}
            />
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