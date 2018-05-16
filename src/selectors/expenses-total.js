export default (expenses = []) => {
  return expenses
    .reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);
};