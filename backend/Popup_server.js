

var WebSocketServer = require('websocket').server;
var http = require('http');


var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Online_Popup:active:8085");
	response.end();
});
server.listen(8085, function() {
	console.log("Online_Popup:active:8085");
});

wsServer = new WebSocketServer({
	maxReceivedFrameSize: 2048, //bytes
	maxReceivedMessageSize: 2048, //bytes
	autoAcceptConnections: false,
	httpServer: server
});
		
wsServer.on('request', function(request) {
	
	var connection = request.accept(null, request.origin);
	
	connection.on('message', function(message) {

	if (message.type === 'utf8') {
		
	  if (message.utf8Data.toString() == "acceso"){
		  
			var fs = require('fs');
			fs.readFile('./sms.txt','utf8', function(error,data) {
				
				console.log('Leyendo el sms');
				connection.send(data); 
				
			});
			
	  }
	 
	}
  });

  connection.on('close', function(connection) {
	console.log(JSON.stringify({"e":false,"m":"Desconexion de usuario con ip "+request.origin}));
  });
});


