//var http = require('http');
//
//http.createServer(function hanler(req, res) {
//	res.writeHead(200, {'Conent-Type' : 'text/plain'});
//	res.end('HELLO WORLD 2');
//	
//}).listen(1337 , '127.0.0.1');
//
//console.log('server running at http://127.0.0.1:1337'); 

//http.request

var request = require('request');
var iconv = require('iconv-lite');
//var request = require('inconv').Iconv;




//var request = require('request');


//request.setEncoding("euckr");
request.get({url: 'http://cj.cj.net/PT/login.aspx' , encoding: null}, function(err, response, body){
//request.get({url: 'http://naver.com' , encoding: 'binary'}, function(err, response, body){
//request.get({url: 'http://www.kongju.ac.kr/lounge/board.jsp?board=student_news&page=0' , encoding: null}, function(err, response, body){
//	buf = new Iconv(body, 'euckr');
//	var buf    = new Buffer(body,'binary');
	iconv.extendNodeEncodings();
	
//	var str = iconv.decode(new Buffer(body), "euc-kr");

	
	
	
	
	
//	console.log(iconv.decode(buf.toString(),'euc-kr' ));
	console.log(body.toString());
	
//    console.log(buf.toString('euckr'));
})
 
