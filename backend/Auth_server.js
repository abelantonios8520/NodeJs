var WebSocketServer = require('websocket').server;
var http = require('http');

//require('./BaseDatos/accesoDatos');

var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Online_Auth:active;8087");
	response.end();
});
server.listen(8087, function() {
	console.log("Online_Auth:active:8087");
});

/* MongoClient("usuario_admin@m2m.com",JSON.stringify({"user":"admin@m2m.com","rol":"1","pass":"m2mdemo","name":"Administrador"}),function(){
	console.log("Bien: asignación de cuenta principal con credenciales 'admin@m2m.com' clave 'm2mdemo'");
})

 MongoClient("usuario_superadmin@m2m.com",JSON.stringify({"user":"superadmin@m2m.com","rol":"2","pass":"m2mdemo","name":"Super Administrador"}),function(){
	console.log("Bien: Ya se ha creado el usuario superadmin con credenciales 'superadmin@m2m.com' clave 'm2mdemo'");
})

 MongoClient("usuario_supervisor@m2m.com",JSON.stringify({"user":"supervisor@m2m.com","rol":"3","pass":"m2mdemo","name":"supervisor"}),function(){
	console.log("Bien: Ya se ha creado el usuario supervisor con credenciales 'supervisor@m2m.com' clave 'm2mdemo' ");
})*/


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
		
	  try{
		  
		  var texto = JSON.parse(message.utf8Data.toString());
		  if (texto.o=="a"){
			var funtionAuth = require('./Funciones/funtionAuth');
			funtionAuth(texto.u,texto.i).then(function(salida) {
				connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
			}).catch(function(err) {
				connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
			});
		  }
		  
	  }catch(e){
	 	  connection.sendUTF(JSON.stringify({"e":true,"m":"No es un json"}));
	  }
    }
  });

  connection.on('close', function(connection) {
	console.log(JSON.stringify({"e":false,"m":"Desconexion de usuario con ip "+request.origin}));
  });
});
