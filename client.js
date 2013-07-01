/**
 * Client connects to server
 * receives and emits the 'msg' event
 */

var NODE_MODULES_PATH = '../node_modules/';
var PORT = 8090;
var HOST = 'http://localhost';

var port = process.argv[2] || PORT;

console.log('client connects to port ' + port);

var io = require(NODE_MODULES_PATH + 'socket.io-client');
var socket = io.connect(HOST + ':' + port);

socket.on('connect', function () {

    process.stdin.resume();
	process.stdin.setEncoding('utf8');
 
    process.stdin.on('data', function (chunk) {
        socket.emit('msg', chunk);
    });

    // wait for messages
    socket.on('msg', function(data) {
        console.log('msg: ' + data);
    });
});
