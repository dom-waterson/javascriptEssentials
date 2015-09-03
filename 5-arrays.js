//Task1 - Output the last element in an array
var fooArray = ["Hello", "dom", "World", "smith", "dom"];

console.log(fooArray.pop());

//Task 2 - Provide a function which outputs the first element of a passed array,
// or if an optional second value is passed (‘n’ – a number) the first 0-­n values
var getElementInArray = function (array, optionalNumber ) {
    return array.slice(0,  optionalNumber || 1);
};

console.log(getElementInArray(fooArray, 2));

//Converts an array into CSV format
var arrayToConvert = ["Hello", "World", 50, 60];
console.log(arrayToConvert.join(", "));

//Converts CSV format into array
var csvString = "Hello,world,test,test2,test3";
var csvStringArray = csvString.split(",");
console.log(csvStringArray);

//Takes two arrays and joins the first onto the end of the last.
var firstArray = ["Hello", "World"];
var secondArray = ["Dom", 50];

var joinArrays = function (array1, array2) {
    var foo = array2.concat(array1);
    return foo;
};

console.log(joinArrays(firstArray, secondArray));

// Create and array of random numbers, and output only the ones divisible by 3
var randomNumbersArray = [];


for(var i = 0; i < 10; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
}

var checkArrayForNumbersDivisibleByThree = function (arrayToCheck) {
    var numbersDivisibleByThree = [];
    for (var i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] % 3 === 0) {
            numbersDivisibleByThree.push(arrayToCheck[i]);
        }

    }
    return numbersDivisibleByThree;
};
console.log(randomNumbersArray);
console.log(checkArrayForNumbersDivisibleByThree(randomNumbersArray));