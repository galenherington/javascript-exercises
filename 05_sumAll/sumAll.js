/* 
create variable named num1 of type integer for holding first value
creat variable named num2 of type integer for holding second value
create variable sum of type integer for holding the final value
determine the numbers in between the num1 and num 2 and store in array named allNumbers
    use a loop which iterates based on num1 and num2 and adds each index to the allNumbers array
add each of these numbers in allNumbers and assign to variable sum
    for each item in the array add the value of item to the sum
*/

const sumAll = function(num1, num2) {
    let sum=0;
    let allNumbers=[];
    let index=0;
    let index2=0;

    if (num1<0 || num2<0) {return "ERROR"}
    if (typeof num1 != "number" || typeof num2 != "number"){return "ERROR"}
    
    num1<num2 ? index=num1: index=num2; //decides which input is smaller and sets that as index
    num1>num2 ? index2=num1 : index2=num2; //decides which input is bigger and sets as index2

    for (i=index; i<=index2; i++){  //determines the elements of the array
        allNumbers.push(i) 
    }
    allNumbers.forEach(element => sum=sum+element)

 return sum 
};

console.log(sumAll(3, 8))

// Do not edit below this line
module.exports = sumAll;
