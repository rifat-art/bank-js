
document.getElementById('btn-withdraw').addEventListener('click',function() {
    const withdrawFieldElement = document.getElementById('withdraw-input');
    const withdrawFieldElementString = withdrawFieldElement.value;
    const newWithdrawInput = parseFloat( withdrawFieldElementString );
    
    const withdrawBalanceElement = document.getElementById('withdraw-ase');
    const withdrawBalanceElementString = withdrawBalanceElement.innerText;
    const newWithdrawBalance = parseFloat( withdrawBalanceElementString );

    const totalWithdrawBalance = newWithdrawBalance + newWithdrawInput;
    withdrawBalanceElement.innerText = totalWithdrawBalance;

    const totalBalanceElement = document.getElementById("total-balance");
    const previousTotalBalanceElementString = totalBalanceElement.innerText;
    const newTotalBalance = parseFloat(previousTotalBalanceElementString) - totalWithdrawBalance;
    totalBalanceElement.innerText = newTotalBalance;


    withdrawFieldElement.value = '';



})