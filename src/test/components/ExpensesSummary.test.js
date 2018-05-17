import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should show summary for 1 expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expenses[0].amount} />);
  expect(wrapper).toMatchSnapshot();
});

test('should show summary for multiple expenses correctly', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={total} />);
  expect(wrapper).toMatchSnapshot();
});