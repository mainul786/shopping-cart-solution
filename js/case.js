function updateCaseNumber(isIncrease){
    const caseNumberFiled = document.getElementById('case-number-field');
    const caseNumberFiledString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberFiledString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;

    return newCaseNumber;
}

function casePriceUpdate(newCaseNumber){
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = newCaseNumber * 59;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
 const newCaseNumber = updateCaseNumber(true);
 casePriceUpdate(newCaseNumber);
 calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(false);
   casePriceUpdate(newCaseNumber);
   calculateSubTotal();
})