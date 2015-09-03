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

printTriangle(3);


// Take a number of rows and output a equalateral triangle
var equalateralTriangle = function(size){
    var stars = '';
    var spaces = '';
    for(var i = 0 ; i < size; i++){
        spaces = '';
        for(var j = size -1-i; j > 0; j--) {
            spaces += ' ';
        }
        stars += '*';
        if(stars.length > 1) {
            stars += '*'
        }
        console.log(spaces+stars);
    }
};

equalateralTriangle(10);


//Output the Fibonacci sequence up, up to a certain value.
var fibonacciSequence = function(endNumber) {
    var a = 0, b = 1, f = 1, count;
    var fibArray = [a, b];
    for (count = 3; count <= endNumber; count++) {
        f = a + b;
        fibArray.push(f);
        a = b;
        b = f;
    }
    return fibArray;
};

console.log(fibonacciSequence(10));

//Looping through numbers
var loopThroughNumbers = function(maxNumber) {
    var storageArray = [];
    for (var i = 1; i <= maxNumber; i++) {
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
    return storageArray;
};

console.log(loopThroughNumbers(50));

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
            if (a[i] < a[i+1]) {
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