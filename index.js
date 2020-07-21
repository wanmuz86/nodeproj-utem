var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'})
	res.end('Hello Node');
}).listen(8080);

console.log("Server started at port 8080");

// What is a server?
// A server is a computer which is accesible on the network

// What is internet
// Interconnection of network (connection between all the computers or devices or objects)


// Domain Name
// To translate the IP address which hosts our application or website into a human readblae ddresss
// Public IP address (http://54.255.165.126/)- > Address to identify a computer in a network x.x.x.x Private IP: 10.x.x.x, 192.x.x.x


// In a server, or in a computer  I can host multiple application... for example
// Host a website - 80 ,8080
// Online game DOTA
// I can stream film - netflix
// I can have email server 25, 587
// FIle 21
// A port is used to differentiate which application to open when request coming in


// 200 is the standard response by server in case of successful connection


// Package Manager - Dependency Management - It manage the dependencies, library or packages
// For example, in Android gradle is used as a package manager.

// iOS - Cocoapods is userd as  a package manager
// In nodeJS we use module (package, library)

//npm install -g nodemon
// sudo npm install -g nodemon
// -g means everywhere
// I want to install nodemon inside my entire PC

// npm install express (see tomorrow)
// I want to install express in my folder
