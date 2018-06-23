export const getFormattedAmount = (amount) => {
  const parsedNumber = parseInt(amount, 10);
  return `$${parsedNumber.toLocaleString('en')}`;
};
