
document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-input");
    const depositFieldString = depositField.value;
    const getDepositTk = parseFloat(depositFieldString);

    const previousDepositAmount = document.getElementById("deposit-ase");
    const previousDepositAmountString = previousDepositAmount.innerText;
    const previousDepositTk = parseFloat(previousDepositAmountString);

    const newTotalDepositAmount = previousDepositTk + getDepositTk;
    previousDepositAmount.innerHTML = newTotalDepositAmount;

    const totalBalanceElement = document.getElementById("total-balance");
    const previousTotalBalanceElementString = totalBalanceElement.innerText;
    const newTotalBalance = parseFloat(previousTotalBalanceElementString) + getDepositTk;
    totalBalanceElement.innerText = newTotalBalance;


    depositField.value = "";
})


// console.log(depositAmount);