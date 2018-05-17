import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    Showing {props.expenseCount} expense{props.expenseCount === 0 || props.expenseCount > 1 ? 's' : ''} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
  </div>
);

const mapStateToProps = (state) => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: filteredExpenses.length,
    expensesTotal: expensesTotal(filteredExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);