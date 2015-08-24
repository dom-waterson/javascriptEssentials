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

//Looping through numbers
var storageArray = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            storageArray.push("JavaScript");
        } else {
            storageArray.push("Java");
        }
    } else if (i % 5 === 0) {
        storageArray.push("Script");
    } else {
        storageArray.push(i);
    }
}

//console.log(storageArray);

//Bubble sort an array (loop through the list if the second value is higher than the first, swap).
// Keep doing this until the list is sorted.
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var b = "Hello";

var bubbleSort = function (a) {
    if (!(a instanceof Array)) {
        console.log("Array object wasn't passed to bubble sort function");
        return;
    }

    var swapped;
    swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    if (swapped) {
        bubbleSort(a);
    }
};

bubbleSort(a);
console.log(a);