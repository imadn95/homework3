function containsDigit(number, digit) {
    const numberString = number.toString();
    return numberString.includes(digit.toString());
  }
let message= "not unlucky"
let luckyNumber=[165, 28, 3789];
  for(let i = 0; i<luckyNumber.length; i++) {
    
    if(containsDigit(luckyNumber[i], 7) === true){
        message = "LUCKY!!!"
        
    }
  }

  console.log(message);
  


   
        
    
  
  
  