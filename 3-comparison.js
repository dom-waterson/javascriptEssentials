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