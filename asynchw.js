// You need to produce the same result as per synchw.js but you only need to use asynchronous methods..
// For tomorrow to be discussed in class (not a marked assignment)
// fs.readFile
// fs.appendFile
// Use example from the documentation to help : https://nodejs.org/api/fs.html

var fs = require("fs");

console.log("Begin reading File");
fs.readFile("input.txt",(err,data)=>{  // function(err,data){}
	if (err) console.log(err)
	console.log(data.toString());
	console.log("End reading file");
	console.log("Appending something");
	fs.appendFile("input.txt","I am appending something", (err)=>{
		if (err) console.log(err);
		console.log("Succesfully appending something")
		console.log("Begin re-reading file")
		/////////////////////
		fs.readFile("input.txt", (err,data)=>{
			if (err) console.log(err);
			console.log(data.toString())
			console.log("Finish re-reading file")
		})
	})
})
