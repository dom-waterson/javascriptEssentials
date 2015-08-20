//Task 1 - Determine whether a variable is odd or even
var oddNum = 13;
var evenNum = 10;

var checkNum = function (num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    }
    else {
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

console.log(convertDegToRad(degreeVal));

//Task 4 - Given the base and perpendicular lengths of a right angle triangle, calculate the hypotenuse length
var getHypotenuse = function (base, height) {
    var hypotemuse = Math.sqrt(base * base + height + height);
    return hypotemuse.toFixed(3);
};

console.log("Hypotenuse is: " + getHypotenuse(3, 4));

//Task 5 - Determine the length of a hypotenuse, for a given “opposite” length and angle
var getHypot = function (oppLength, angle) {
    return oppLength / Math.sin(angle);
};

console.log(getHypot(10, 60));


//Task 6 - A Program to roll a six-sided die
var rollSixDie = function () {
    //var min = 1;
    //var max = 6;
    //return Math.floor(Math.random() * (min - max + 1)) + min;
    return 1 + Math.floor(Math.random() * 6)
};

for(var i = 0; i < 5; i++) {
    console.log(rollSixDie());
}