
document.getElementById("btn-deposit").addEventListener("click", function(){
    const depositField = document.getElementById("deposit-input");
    const depositAmount = depositField.value;

    const depositAse = document.getElementById("deposit-ase");
    const depositTotal = depositField.innerText;
    depositAse.innerText = depositAmount;
    depositField.value = "";

    console.log(depositAmount);

})


// console.log(depositAmount);