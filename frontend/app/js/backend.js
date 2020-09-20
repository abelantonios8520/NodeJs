var backend = this;
backend.ip = "localhost";

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


backend.authe = function (user,pass,host,port,callback){
	

	var mensaje =JSON.stringify({"o":"a","u":pass,"i":user});
	backend.conexionEnvio(host,port,mensaje,function (salida){
		return callback(salida);
	});

}

backend.query = function (query,host,port,callback){
	

	var mensaje =JSON.stringify({"o":"q","u":query});
	backend.conexionEnvio(host,port,mensaje,function (salida){
		return callback(salida);
	});

}

backend.grafica = function (query,host,port,callback){
	
	backend.conexionEnvio(host,port,query,function (salida){
		return callback(salida);
	});

}


$("#init").click(function(){
	//backend.authe($("#email").val(),$("#password").val(),backend.ip,"8080",function(salida){			
	backend.authe($("#email").val(),$("#password").val(),backend.ip,"8087",function(salida){			
			var datos = JSON.parse(salida);
			if (datos.e){
				swal("Error", datos.m, "error");
			}else{
				window.sessionStorage.setItem("sesion",datos.m);
				setTimeout(function(){
					window.location.href = "panel.html";
				},1000);
				
			}
		
	});
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        $("#init").click();
    }
});


