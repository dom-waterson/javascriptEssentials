var helloString = 'Hello World!';
console.log(helloString);

// Extract the records from the follwing CSV record:1997,Ford,E350,"Super luxurious” truck
var csvRecord = [1997, "Ford", "E350", "Super luxurious truck"];
for(var x in csvRecord) {
    console.log(csvRecord[x]);
};

//Find the position of the first vowel in the textJSDFHDVHUEVDAKNDSEINX
var text = "JSDFHDVHUEVDAKNDSEINX";
var vowelPostion = text.search(/[aeiouAEIOU]/);
var letter = text[vowelPostion];
console.log("The first vowel in " + text + " is: " + letter + ". At postion: " + vowelPostion);

//Use a regex to determine if a given string is a number.
var testStringNum = "5555";
var test = "Hello";

var testString  = function (string) {
    var numReg = new RegExp('^[0-9]+$');
    if (string.match(numReg) != null) {
        console.log("This string contains a number");
    } else {
        console.log("This string dosn't contain a number");
    };
};

testString(testStringNum);
testString(test);
