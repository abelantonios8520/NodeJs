var port2 = "9999";

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Online_Push_server:active:"+port2);
	response.end();
});
server.listen(port2, function() {
	console.log("Online_Push_server:active:"+port2);
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
		
			var fs = require('fs');
			fs.readFile('./clave.txt','utf8', function(errorv,datav) {
			
				
				if (message.utf8Data.toString() == datav){
										
					var fs = require('fs');
					fs.readFile('./trama_push_'+port2+'.txt','utf8', function(errorb,datab) {
						
						if (datab){
							console.log('Leyendo diferencia de tramas');
							connection.send(datab);
							
							setTimeout(function(){
								var fs = require('fs');
								fs.writeFile('./trama_push_9999.txt','', function() {
									console.log('Guardado archivos push android');
								});
							},500);
						
						}else{
							connection.send("0-0-0-0_0-0-0-0");
						}
						
					});
				}
				
				
			});
		}
	});

	connection.on('close', function(connection) {
		console.log(JSON.stringify({"e":false,"m":"Desconexion de usuario con ip "+request.origin}));
	});
});