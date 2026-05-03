import { RATES } from '../constants/rates.js';
import { Validators } from '../utils/validators.js';
import { Formatter } from '../utils/formatter.js';

class Calculator {
  constructor(mode = 'CASHOUT') {
    this.mode = mode;
    this.currentAmount = 0;
    this.rateConfig = RATES[mode] || RATES.CASHOUT;
  }

  calculate(amount) {
    if (!Validators.isValidAmount(amount, this.rateConfig.min_amount, this.rateConfig.max_amount)) {
      return {
        isValid: false,
        error: `Amount must be between ${this.rateConfig.min_amount} and ${this.rateConfig.max_amount}`
      };
    }

    const numAmount = parseFloat(amount);
    const chargePercentage = this.rateConfig.charge_percentage;
    const charge = (numAmount * chargePercentage) / 100;
    const total = numAmount + charge;

    this.currentAmount = numAmount;

    return {
      isValid: true,
      transactionAmount: numAmount,
      serviceCharge: charge,
      totalAmount: total,
      chargePercentage: chargePercentage,
      formattedTransaction: Formatter.formatCurrency(numAmount),
      formattedCharge: Formatter.formatCurrency(charge),
      formattedTotal: Formatter.formatCurrency(total)
    };
  }

  setMode(mode) {
    if (RATES[mode]) {
      this.mode = mode;
      this.rateConfig = RATES[mode];
    }
  }

  getConfig() {
    return this.rateConfig;
  }
}

export { Calculator };
