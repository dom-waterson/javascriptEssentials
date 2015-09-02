// Task 1 - Fuel calculator: for a given MPG and distance, calculate the number of gallons of fuel needed for a trip.
var calculateNumberOfGallons = function (mpg, distance) {
    return distance/ mpg;
};

console.log(calculateNumberOfGallons(55, 110));

// Task 2 - Love Calculator
var name1 = "foo";
var name2 = "bar";

var loveCalculator = function (name1, name2) {
    var length1 = name1.length;
    var lenght2 = name2.length;

    var number = length1 + lenght2 - Math.floor(Math.random() * 6);
    var result = number * 42;
    if (result > 100) {
        return 100;
    }
    else {
        return result;
    }
};

loveCalculator(name1,name2);

//Task 3 - Calculate the area of a circle for a given radius and diameter.

var calculateAreaOfCircleWithRadius = function (radius) {
    return 2 * radius * Math.PI ;
};

console.log(calculateAreaOfCircleWithRadius(6));