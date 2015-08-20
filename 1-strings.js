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