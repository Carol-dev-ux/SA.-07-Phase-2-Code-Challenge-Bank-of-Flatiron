import { render, screen, waitFor } from '@testing-library/react';
import TransactionTable from './components/TransactionTable';

// Mocking the data that would be fetched from the API
const mockTransactions = [
  {
    id: 1,
    date: '2022-01-01',
    description: 'Mock Transaction 1',
    category: 'Mock Category 1',
    amount: 10.00
  },
  {
    id: 2,
    date: '2022-01-02',
    description: 'Mock Transaction 2',
    category: 'Mock Category 2',
    amount: 20.00
  }
];

test('renders transactions in the table', async () => {
  render(<TransactionTable transactions={mockTransactions} />);
  
  // Wait for the transactions to be rendered
  await waitFor(() => {
    // Check if the table rows are rendered with the transaction data
    expect(screen.getByText('Mock Transaction 1')).toBeInTheDocument();
    expect(screen.getByText('Mock Category 1')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();

    expect(screen.getByText('Mock Transaction 2')).toBeInTheDocument();
    expect(screen.getByText('Mock Category 2')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
  });
});
