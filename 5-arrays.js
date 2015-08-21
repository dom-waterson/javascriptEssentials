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


//Takes two arrays and joins the first onto the end of the last.
var firstArray = ["Hello", "World"];
var secondArray = ["Dom", 50];

var joinArrays = function (array1, array2) {
    var foo = array1.concat(array2);
    return foo;
};

console.log(joinArrays(firstArray, secondArray));