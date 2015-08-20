var helloString = 'Hello World!';
console.log(helloString);

// Extract the records from the follwing CSV record:1997,Ford,E350,"Super luxurious” truck
var csvRecord = [1997, "Ford", "E350", "Super luxurious truck"];
for(var x in csvRecord) {
    console.log(csvRecord[x]);
}