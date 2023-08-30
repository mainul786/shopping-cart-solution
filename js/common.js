function subtotalAmountUpdate(subId){
    const subtotalElement = document.getElementById(subId);
    const subtotalElementString = subtotalElement.innerText;
    const subtotalElementAmount = parseInt(subtotalElementString);
    return subtotalElementAmount;
}

function setSubTotalById(subId, value){
    const subtotalElement = document.getElementById(subId);
    subtotalElement.innerText = value;
}

function calculateSubTotal(){
    const phoneTotal = subtotalAmountUpdate('phone-total-price');
    const caseTotal = subtotalAmountUpdate('case-price');
    const subTotal = phoneTotal + caseTotal;

    setSubTotalById('sub-total', subTotal);
    

    // calculate tax 
    const taxAmount = (subTotal * 0.1).toFixed(2);
    const taxAmountString = parseFloat(taxAmount)
    setSubTotalById('tax-amount', taxAmountString);

    // calculate final value;
    const totalAmount = subTotal + taxAmountString;
    setSubTotalById('total', totalAmount)
}