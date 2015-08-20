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