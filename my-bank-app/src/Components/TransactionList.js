import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setTransactions(data.transactions);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  // Check if transactions array is empty or undefined
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available.</p>;
  }

  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
