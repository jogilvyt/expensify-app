import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: filteredExpenses.length,
    expensesTotal: expensesTotal(filteredExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);