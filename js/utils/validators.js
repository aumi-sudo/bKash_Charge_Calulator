const Validators = {
  isValidAmount: (amount, minAmount, maxAmount) => {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount >= minAmount && numAmount <= maxAmount;
  },
  isPositive: (value) => {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue > 0;
  }
};

export { Validators };
