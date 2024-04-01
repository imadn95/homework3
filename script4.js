function oddishOrEvenish(value) 
{   var value;
    let sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
if(sum%2 == 0){
    
    return "Evenish"
}
    else{
        return "Oddish"
    }
}

console.log(oddishOrEvenish(135));
