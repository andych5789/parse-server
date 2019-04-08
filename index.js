var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
	databaseURI: 'mongodb+srv://jaksang:1234@cluster0-cn5zz.mongodb.net/test?retryWrites=true',
	appId: 'JakSang',
	masterKey: 'kingmaker2',
	fileKey: 'perfectsecond2',
	serverURL: "http://localhost:1337/parse"
});

app.use('/parse', api);

var port = process.env.PORT || 1337;
app.listen(port, function() {
	console.log('parse-server running on port ' + port + '.');
});