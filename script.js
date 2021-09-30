var removeNotice = function(){
    document.getElementById('privacyNotice').style.display = "none"
}

var checkIfLucky = function(){

    var birthDate = document.getElementById("inputBirthday").value;
    var luckyNumber = document.getElementById("inputLuckyNum").value;
    var birthDateInt = parseInt(birthDate.replace(/-/g, ""));
    var sumOfDigit= 0;  

    if(birthDate || luckyNumber){
    for(let i = 0; i < 8; i++){

        sumOfDigit += birthDateInt%10;
        var birthDateInt = Math.trunc(birthDateInt/10);
    }
    
    if(sumOfDigit % luckyNumber==0){
        document.getElementById('showResult').innerHTML = "Your Lucky Number is Lucky";
    }else
    {
        document.getElementById('showResult').innerHTML = "Your Lucky Number is Not so Lucky";
    }
}

else {
    document.getElementById('showResult').innerHTML = "Please Input all the Values"
}
}
