import React, { useState, useEffect } from 'react';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/transactions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  const addTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setFilteredTransactions(prevFilteredTransactions => [...prevFilteredTransactions, newTransaction]);
  };
  
  const handleSearch = searchTerm => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    if (!trimmedSearchTerm) {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(trimmedSearchTerm)
      );
      setFilteredTransactions(filtered);
    }
  };
  
  

  return (
    <div className="app-container">
      <h1>Bank Transactions App</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar handleSearch={handleSearch} />
      {filteredTransactions && filteredTransactions.length > 0 ? (
        <TransactionList transactions={filteredTransactions} />
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
}

export default App;




