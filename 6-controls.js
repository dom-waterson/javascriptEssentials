// Take a number of rows and output a right angled triangle
var star = "";
var printTriangle = function (rows) {
    for (var i = 0; i < rows; i++) {
        console.log(star += "*");
        for (var i = 0; i <= rows; i++) {
            console.log(star += "*");
        }
    }
}

//printTriangle(3);



//Output the Fibonacci sequence up, up to a certain value.
var printFibonacciSequence = function(endNumber) {
    var a = 0, b = 1, f = 1;
    var fibArray = [a, b];
    do {
        f = a + b;
        fibArray.push(f);
        a = b;
        b = f;
    } while (foundNumber(f, endNumber));
    console.log(fibArray);
};


var foundNumber = function (fibonacciNumber, endNumber) {
    if (fibonacciNumber === endNumber) {
        return false;
    } else {
        return true;
    }
};

printFibonacciSequence(21);

