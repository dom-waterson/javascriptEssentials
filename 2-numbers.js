//Task 1 - Determine whether a variable is odd or even
var oddNum = 13;
var evenNum = 10;

var checkNum = function (num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    };
};

checkNum(evenNum);
checkNum(oddNum);

//Task 2 - Convert Celsius into Farenheit
var temp = 20;

var convertCelToFah = function (temp) {
    return temp * 9 / 5 + 32;
};

console.log(convertCelToFah(temp));

//Task 3 - Convert degrees into radians
var degreeVal = 90;

var convertDegToRad = function (degree) {
    var radians = degree * Math.PI / 180
    return radians;
};

console.log(convertCelToFah(degreeVal));