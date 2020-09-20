var WebSocketServer = require('websocket').server;
var http = require('http');


function Cipher(text, callback) {
	var moment = require('moment');
	var bound = 0x10000,otro = moment().format('DD');
	rotation = parseInt(+otro) % bound;
	if(rotation === 0) return callback(text);
	return callback(String.fromCharCode.apply(null,
		text.split('').map(function(v) {
			return (v.charCodeAt() + rotation + bound) % bound;
		})
	));
}

var server = http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Online_Elements:active;8088");
	response.end();
});
server.listen(8088, function() {
	console.log("Online_Elements:active:8088");
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
		
	  try{
		  
		  var texto = JSON.parse(message.utf8Data.toString());
		  
		  if(texto.o=="q"){

			if (texto.u.a == "addElements"){

				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						
						var funtionAdd = require('./Funciones/agregarElements');
						funtionAdd(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
				
			}else if(texto.u.a == "delElements"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionDel = require('./Funciones/deleteElements');
						funtionDel(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
				
			}else if(texto.u.a == "limitar"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionDel = require('./Funciones/limitar');
						funtionDel(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
				
			}else if(texto.u.a == "limitantes"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionRead = require('./Funciones/limitantes');
						funtionRead().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
				
			}else if(texto.u.a == "readElements"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionRead = require('./Funciones/readElements');
						funtionRead().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
				
			}else if (texto.u.a =="addSensor"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddSEN = require('./Funciones/agregarSensor');
						funtionAddSEN(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="addRelay"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddrelay = require('./Funciones/addRelay');
						funtionAddrelay(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="addRelayConfigON"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddrelaycON = require('./Funciones/addRelayConfigON');
						funtionAddrelaycON(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="keypush"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var clave = texto.u.d;
						var fs = require('fs');
						fs.writeFile('./clave.txt',clave, function() {
							console.log('Guardado clave');
							connection.sendUTF(JSON.stringify({"e":false,"m":"Na"}));
						});
						
					}
					
				});
			}else if (texto.u.a =="addRelayConfigOFF"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddrelaycON = require('./Funciones/addRelayConfigOFF');
						funtionAddrelaycON(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="vaciar"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddrelaycON = require('./Funciones/vaciar24Todo');
						funtionAddrelaycON().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="readTrama"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddrelaycON = require('./Funciones/readTrama');
						funtionAddrelaycON().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});
			}else if (texto.u.a =="delSensor"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionAddSEN = require('./Funciones/delSensor');
						funtionAddSEN(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});	
			}else if (texto.u.a =="delRelay"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtiondelRelay  = require('./Funciones/delRelay');
						funtiondelRelay(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
						
					}
					
				});	
			}else if (texto.u.a =="readSensores"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionReadSen = require('./Funciones/readSensor');
						funtionReadSen().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});	
			}else if (texto.u.a =="readRelaysOn"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var readRelayon = require('./Funciones/readron');
						readRelayon().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});	
			}else if (texto.u.a =="readRelaysOff"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){

						var readRelaysoff = require('./Funciones/readroff');
						readRelaysoff().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});	
			}else if (texto.u.a =="readRelays"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionReadRelays = require('./Funciones/readRelays');
						funtionReadRelays().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});	
			}else if (texto.u.a =="casarSensores"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionCasaSen = require('./Funciones/enlazarSensor');
						funtionCasaSen(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});
				
			}else if (texto.u.a =="divorciarSensores"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionCasaSen = require('./Funciones/desenlazarSensor');
						funtionCasaSen(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}
					
				});
				
			}else if (texto.u.a =="CrearUser"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e && salida1 == "admin@m2m.com"){
						
						var funtionCrear = require('./Funciones/crearUser');
						funtionCrear(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}else if (texto.u.a =="eliminarUser"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionEliminarUser = require('./Funciones/delUser');
						funtionEliminarUser(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});	
			}else if (texto.u.a =="delRelayProgEncen"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var delprogencendido = require('./Funciones/delprogencendido');
						delprogencendido(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});	
				
			}else if (texto.u.a =="delRelayProgApaga"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var delprogApagado = require('./Funciones/delprogApagado');
						delprogApagado(texto.u.d).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});	
				
			}else if (texto.u.a =="readSms"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var funtionLecturaSms = require('./Funciones/smsLectura');
						funtionLecturaSms().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}else if (texto.u.a =="changePassEle"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var otrs = texto.u.d;
						
						var funtionUpdate = require('./Funciones/updatePassEle');
						funtionUpdate(otrs[0],otrs[1]).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}else if (texto.u.a =="readHistory24"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
												
						var funtionUpdate = require('./Funciones/readHistory24');
						funtionUpdate().then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}else if (texto.u.a =="updateIcon"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var otrs = texto.u.d;
						var nomb = {"nom":otrs.nom}
						var icon = {"ico":otrs.ico}
						
						var funtionUpdate = require('./Funciones/updateIcon');
						funtionUpdate(icon,nomb).then(function(salida) {
							connection.sendUTF(JSON.stringify({"e":false,"m":salida})); 
						}).catch(function(err) {
							connection.sendUTF(JSON.stringify({"e":true,"m":err})); 
						});
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}else if (texto.u.a =="EnviarSms"){
				
				Cipher(texto.u.t,function(salida1){
					
					if (salida1 == texto.u.e){
						
						var cel = texto.u.d.cel;
						var sms = texto.u.d.mjs;
						
						
						var userGateway = "user007";
						var passGateway = "user007";

						var request = require("request");
						var options = { method: 'GET',
						  url: 'http://192.168.1.100:80/sendsms',
						  qs: 
						   { username: userGateway,
							 password: passGateway,
							 phonenumber: cel,
							 message: sms }};

						request(options, function (error, response, body) {
						  if (error){
							  connection.sendUTF(JSON.stringify({"e":true,"m":error}));
						  }else{
							  connection.sendUTF(JSON.stringify({"e":false,"m":"Enviado"}));
						  }
						});
						
						
					}else{
						connection.sendUTF(JSON.stringify({"e":true,"m":"No es admin@m2m.com"}));
					}
					
				});
				
			}
			
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
