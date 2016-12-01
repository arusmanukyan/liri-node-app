var fs = require("fs");

fs.readFile("keys.js", "utf8", function (error, data){
	
	var dataArray = data.split(",");


	for (var i = 0; i < dataArray.length; i++){
	console.log(dataArray[i]);

	}

})