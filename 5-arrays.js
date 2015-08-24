//Task1 - Output the last element in an array
var fooArray = ["Hello", 10, "World", 20];

console.log(fooArray.pop());

//Task 2 - Provide a function which outputs the first element of a passed array,
// or if an optional second value is passed (‘n’ – a number) the first 0­n values
//TODO: When optionalNumber is passed, the array returning is not correct.
var getElementInArray = function (array, optionalNumber) {
    if (optionalNumber === undefined) {
        console.log(array[0]);
    }
    else {
        var baz = array.slice(0, optionalNumber);
        for (var i =0; i<baz.length;i++) {
            console.log(array[i]);
        }
    }
};

getElementInArray(fooArray,0);

//Converts an array into CSV format
var arrayToConvert = ["Hello", "World", 50, 60];
var csvData ="";

for (var i = 0; i < arrayToConvert.length; i++) {
    csvData += arrayToConvert[i] + ", ";
}

console.log(csvData);

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

for(var i = 0; i < randomNumbersArray.length; i++) {
    if (randomNumbersArray[i] % 3 === 0) {
        console.log(randomNumbersArray[i]);
    }
}

