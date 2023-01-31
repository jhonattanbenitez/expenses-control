import React from 'react'

const Expense = ({expense}) => {
    const {name, quantity, category} = expense
  return (
    <div>
        <p>{name}</p>
        <p>{quantity}</p>
        <p>{category}</p>
    </div>
  )
}

export default Expense