var fs = require("fs");

console.log("Begin reading file");
var data = fs.readFileSync("input.txt")
console.log(data.toString());
console.log("End reading file");
console.log("Begin appending file")
fs.appendFileSync("input.txt","I am appending a file");
console.log("End appending file");
console.log("Begin re-reading file")
var anotherData = fs.readFileSync("input.txt")
console.log(anotherData.toString())
console.log("Finish re-reading file")