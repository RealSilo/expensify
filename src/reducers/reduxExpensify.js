import { createStore, combineReducers } from 'redux';



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({description: 'Rent', amount: 100 }));

const demoState = {
  expenses: [{
    id: 'haha',
    description: 'rent',
    note: 'January',
    amount: 44333,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
