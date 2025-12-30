function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;

    interestRateValue = document.getElementById("rate").value;

    monthPaymentValue = document.getElementById("month").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthPaymentValue;

    monthPaymentValue = (loanAmountValue / monthPaymentValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthPaymentValue}`;
}