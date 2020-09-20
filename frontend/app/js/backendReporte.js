var backend = this;

backend.conexionEnvio = function (host,port,datos,callback){
	if ("WebSocket" in window){
		var ws = new WebSocket("ws://"+host+":"+port+"/");
		ws.onopen = function(){
			ws.send(datos);
		};
		ws.onmessage = function (evt) { 
		  ws.close();
		  return callback(evt.data);
		};
		window.onbeforeunload = function(event) {
		  ws.close();
		};
	}else{
	   return callback(JSON.stringify({"e":true,"m":"WebSocket NOT supported by your Browser"}));
	}
}

backend.query = function (query,host,port,callback){
	

	var mensaje =JSON.stringify({"o":"q","u":query});
	backend.conexionEnvio(host,port,mensaje,function (salida){
		return callback(salida);
	});

}


