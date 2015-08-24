// Take a number of rows and output a right angled triangle
var star = "";
var printTriangle = function (rows) {
    for (var i = 0; i < rows; i++) {
        console.log(star += "*");
    }
}

printTriangle(3);