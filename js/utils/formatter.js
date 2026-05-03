const Formatter = {
  formatCurrency: (value, currency = 'BDT', decimals = 2) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return `0.00 ${currency}`;
    return `${numValue.toFixed(decimals)} ${currency}`;
  },
  formatNumber: (value, decimals = 2) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '0.00';
    return numValue.toLocaleString('en-BD', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }
};

export { Formatter };
