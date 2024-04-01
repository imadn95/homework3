

let countTrue = ["True","False","True","False","True","True","True"];
var sum = 0;
for (let i = 0; i < countTrue.length; i++) {
    if (countTrue[i] === "True") {
        sum+=1;
        } 
}
console.log(sum);
