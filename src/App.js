import TransactionList from './components/TransactionList';
import './App.css';
import FinancialSummary from './components/FinancialSummary';
import TransactionForm from './components/TransactionForm';
import { useState } from 'react';
function App() {
  const [transactions, setTransactions]=useState([]);
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (

    <div className='App'>
      <h2> 🧾 Budget Tracker App </h2>
      <TransactionForm onAddTransaction={addTransaction}></TransactionForm>
      <FinancialSummary transaction={transactions}></FinancialSummary>
      <TransactionList  transactions={transactions}></TransactionList>
    </div>
  );

}

export default App;
