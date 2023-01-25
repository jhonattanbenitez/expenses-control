import React from 'react'

const ExpensesControl = ({budget}) => {
  return (
    <div className='budget-container container shadow two-columns'>
        <div>
            grafica
        </div>
        <div className='budget-content'>
            <span>Budget: </span> ${budget}
        </div>
    </div>
  )
}

export default ExpensesControl