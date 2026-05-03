const RATES = {
  CASHOUT: {
    charge_percentage: 1.85,
    min_amount: 50,
    max_amount: 30000,
    monthly_limit: 50000,
    description: 'Cash Out from Agent'
  },
  MONEY_SEND: {
    charge_percentage: 2.0,
    min_amount: 1,
    max_amount: 100000,
    monthly_limit: 500000,
    description: 'Send Money to another bKash user'
  },
  BILL_PAY: {
    charge_percentage: 0.5,
    min_amount: 1,
    max_amount: 1000000,
    monthly_limit: 10000000,
    description: 'Pay bills and merchant services'
  }
};

export { RATES };
