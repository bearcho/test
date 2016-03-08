var http = require('http');

http.createServer(function hanler(req, res) {
	res.writeHead(200, {'Conent-Type' : 'text/plain'});
	res.end('HELLO WORLD 2');
	
}).listen(1337 , '127.0.0.1');

console.log('server running at http://127.0.0.1:1337'); 

