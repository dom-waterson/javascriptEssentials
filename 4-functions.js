// Task 1 - Fuel calculator: for a given MPG and distance, calculate the number of gallons of fuel needed for a trip.
var mpg = 55;
var distance = 100;

var calculateNumberOfGallons = function (mpg, distance) {

};

// Task 2 - Love Calculator
var name1 = "foo";
var name2 = "bar";

var loveCalculator = function (name1, name2) {
    var length1 = name1.length;
    var lenght2 = name2.length;

    var number = length1 + lenght2 - Math.floor(Math.random() * 6);
    var result = number * 42;
    if (result > 100) {
        console.log("100");
    }
    else {
        console.log(result);
    }
};

loveCalculator(name1,name2);