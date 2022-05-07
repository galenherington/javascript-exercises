/* 
    Is year/4 with no remainder
    Is year/100 with no remainder
    Is year/400 with no remainder
*/


const leapYears = function(year) {
let isLeapYear = false;
 if (year % 4 ===0) {
     if (year % 100 === 0 && year % 400 !== 0) {isLeapYear=false}
     else {isLeapYear=true}
 }  
 return isLeapYear
};

console.log(leapYears(1000))

// Do not edit below this line
module.exports = leapYears;
