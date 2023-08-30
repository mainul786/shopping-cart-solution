function updatePhoneById(isIncrease){
    const phoneField = document.getElementById('phone-field');
    const phoneFieldValue = phoneField.value;
    const phoneFieldString = parseInt(phoneFieldValue);

    let newPhoneValue;

    if(isIncrease === true){
       newPhoneValue =  phoneFieldString + 1;
    } else{
        newPhoneValue = phoneFieldString - 1;
    }

    phoneField.value = newPhoneValue;

    return newPhoneValue;

}

function phonePriceUpdate(newPhoneValue){
    const phoneTotalPrice = document.getElementById('phone-total-price');
    const phonePrice = newPhoneValue * 1219;
    phoneTotalPrice.innerText = phonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
const newPhoneValue = updatePhoneById(true);
phonePriceUpdate(newPhoneValue);

calculateSubTotal();


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
  const newPhoneValue = updatePhoneById(false);
  phonePriceUpdate(newPhoneValue);

  calculateSubTotal();
})