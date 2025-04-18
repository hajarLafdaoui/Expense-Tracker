import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

import Transaction from './Transaction';

const TransactionList = () => {
  // taking { transactions } using destrucuring instead of using a variable like context than access it like this context.transactions
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) =>(<Transaction key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </>
  )
}

export default TransactionList
