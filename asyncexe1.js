var fs = require('fs')

fs.readFile("input.txt",function(err,data){
	//0.00000001
	if (err) console.log(err);
	console.log(data.toString())
})
console.log("Program ended!");