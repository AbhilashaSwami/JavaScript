var fs= require('fs');
var input=fs.createReadStream('csv/Production.csv','utf8');
input.on('data',function (data) {
	console.log(data);
});