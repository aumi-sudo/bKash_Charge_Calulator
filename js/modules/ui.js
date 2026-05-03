class UI {
  constructor() {
    this.elements = {};
    this.initializeElements();
  }

  initializeElements() {
    this.elements = {
      amountInput: document.getElementById('amount'),
      resultsDiv: document.getElementById('results'),
      transAmountEl: document.getElementById('transAmount'),
      chargeAmountEl: document.getElementById('chargeAmount'),
      totalAmountEl: document.getElementById('totalAmount'),
      receiveNoteEl: document.getElementById('receiveNote')
    };
  }

  displayResults(result) {
    if (!result.isValid) {
      this.hideResults();
      return;
    }

    this.elements.transAmountEl.textContent = result.formattedTransaction;
    this.elements.chargeAmountEl.textContent = result.formattedCharge;
    this.elements.totalAmountEl.textContent = result.formattedTotal;
    this.elements.receiveNoteEl.textContent = `You will receive ${result.formattedTransaction} in cash`;

    this.showResults();
  }

  showResults() {
    if (this.elements.resultsDiv) {
      this.elements.resultsDiv.classList.add('show');
    }
  }

  hideResults() {
    if (this.elements.resultsDiv) {
      this.elements.resultsDiv.classList.remove('show');
    }
  }

  getInputValue() {
    return this.elements.amountInput ? this.elements.amountInput.value : '';
  }

  setInputValue(value) {
    if (this.elements.amountInput) {
      this.elements.amountInput.value = value;
    }
  }
}

export { UI };
