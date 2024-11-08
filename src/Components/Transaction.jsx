import React from 'react'

const transaction = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+' : '-';
  return (
    <div>
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
    {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
  </li> 
    </div>
  )
}

export default transaction
