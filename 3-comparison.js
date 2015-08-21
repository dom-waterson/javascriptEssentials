//Task 1 - Declare two variables and output the largest

var test1 = 50;
var test2 = 10;

var findLargestVariable = function (val1, val2) {
    if (val1 > val2) {
        console.log(val1 + " is greater than " + val2);
    }
    else if (val2 > val1) {
        console.log(val2 + " is greater than  " + val1);
    }
    else
    {
        console.log("Both values are the same");
    }
};

findLargestVariable(test1, test2);

//Task 2 - Declare three variables and output the product and whether product is negative or not.

var firstNumber = 3;
var secondNumber = 8;
var thirdNumber = 9;

var getTheProduct = function (firstNum, secondNum, thirdNum) {
    var product = firstNum * secondNum * thirdNum;
    console.log("The product of " + firstNum + ", " + secondNum + ", " + thirdNum + " is: " + product);
    if(isNegative(product)) {
        console.log("Which is postive");
    }
    else {
        console.log("Which is negitive");
    }
};

var isNegative = function (product) {
    var result = product % 2;
    if (result === 0) {
        return true;
    }
    else {
        return false;
    }
};

getTheProduct(firstNumber,secondNumber,thirdNumber);
