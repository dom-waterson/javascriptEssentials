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
    if(isPostive(product)) {
        console.log("Which is postive");
    }
    else {
        console.log("Which is negitive");
    }
};

var isPostive = function (product) {
    var result = product % 2;
    return result === 0;
};

getTheProduct(firstNumber,secondNumber,thirdNumber);

// Task 3 - A grading system: if the score provided is less that 40 = F,
// less than 50= E etc up to A. No A*,
// they’re just a whack idea to cover up the fact exams are too easy

var score = 81;

var checkScore = function (score) {
    if (score >= 80) {
        printScore("A");
    }
    else if (score < 80 && score >= 70) {
        printScore("B")
    }
    else if (score < 70 && score >= 60) {
        printScore("C");
    }
    else if (score < 60 && score >= 50) {
        printScore("D");
    }
    else if (score < 50 && score >= 40) {
        printScore("E");
    }
    else{
        printScore("F");
    }
};

var printScore = function (grade) {
    console.log("Your score is equal to: " + grade);
};

checkScore(score);