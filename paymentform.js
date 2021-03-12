function validatepayment(){
    var cardholder=document.getElementById("owner").value;
    var cardnumber=document.getElementById("cardNumber").value;
    var cvv=document.getElementById("cvv").value;
    var expirtydate=document.getElementById("expiration-date").value;
}

function cardholdervalidation(cardholder){
    if(cardholder==null || cardholder==""){
        document.getElementById("owner").innerHTML = "Enter Card Holder Name";
        return false;
    }
    else {
        return true;
    }
    
}
function cardnumbervalidation(cardnumber) {
    if (cardnumber==null || cardnumber==""){  
        document.getElementById("cardNumber").innerHTML = "Card Number is Necessary to Proceed"; 
        return false;  
    }
    else if(cardnumber.length<16){  
        document.getElementById("cardNumber").innerHTML = "Card Number must be least 15 digits long.";   
        return false;  
    }  
    else {
        return true;
    }
}
function cvvvalidation(cvv) {
    if (cvv==null || cvv==""){  
        document.getElementById("cvv").innerHTML = "enter cvv "; 
        return false;  
    }
    else if(cvv.length<3){  
        document.getElementById("cvv").innerHTML = "cvv must be 3 digits.";   
        return false;  
    }  
    else {
        return true;
    }
}
 function telvalidation(tel){
    if (isNaN(tel)){  
        document.getElementById("tel-msg").innerHTML="Enter Numeric value only";  
        return false;  
    }
    else{  
        return true;  
        }

 }
