Bank Transactions App
This React application allows users to manage bank transactions. It provides functionalities to add new transactions, search for transactions by description, and view a list of transactions.

Usage
Adding Transactions
To add a new transaction:

Enter the transaction details in the provided form.
Click the "Add Transaction" button.
Searching Transactions
To search for transactions by description:

Enter a search term in the search bar.
The transaction list will update to display only transactions whose description contains the search term.
Components
TransactionForm
This component renders a form for adding new transactions. It accepts a function addTransaction as a prop to handle adding transactions.

SearchBar
This component renders a search bar for searching transactions by description. It accepts a function handleSearch as a prop to handle searching.

TransactionList
This component renders a list of transactions. It accepts an array of transactions as a prop.

Dependencies
React
react-dom
prop-types
Development
Built With
React
CSS
Author
Caroline Wachira





