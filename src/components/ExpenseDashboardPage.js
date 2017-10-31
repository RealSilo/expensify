import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
  <div>
    Dashboard
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashBoardPage;
