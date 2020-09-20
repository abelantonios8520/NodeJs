//http://localhost:3000/api/add-sms?number=4167638750&port=3606&text=AIN1 Ultra-High Value Alarm;Current is 14.43Relay X is OFFAC&time=18/04/2018 9:77:13PM

var express = require('express');

//Inicialización
var app = express();
require('./BaseDatos/accesoDatos');

app.get('/api/add-sms', function (req, res) {
	
	var num = req.query.number  || false; 
	var por = req.query.port  || false; 
	var tex = req.query.text  || false; 
	var tim = req.query.time  || false;
	
	if (num && por && tex && tim && req.query.number.length < 30 && req.query.port.length < 10 && req.query.text.length < 300 && req.query.time.length < 60){
		
		try{
			var realnum = num;
			var realpor = decodeURI(por);
			var realtex = decodeURI(tex);
			var realtim = decodeURI(tim);
	
			req.query.name = "No asignado";
			
			if (realtex.length > 15){
				
				var funtionAdd2 = require('./Funciones/agregarHistorico');
				funtionAdd2(req.query).then(function(salida2) {
					console.log('Guardado en historico 24/7');
				}).catch(function(err) {
					console.log("Error al guardar historico sms ",err);
				});
				
				var funtionAdd = require('./Funciones/agregarSms');
				funtionAdd(req.query).then(function(salida) { 

					var fs = require('fs');
					fs.writeFile('./sms.txt',JSON.stringify(req.query), function() {
						console.log('Guardado para el socket');
					});
					
					var fs = require('fs');
					fs.writeFile('./EstadoSms.txt',realtim, function() {
						console.log('Guardado para comparacion');
					});
					
					res.send(JSON.stringify({"e":false,"m":"Procesado"}));
				}).catch(function(err) {
					res.send(JSON.stringify({"e":true,"m":err}));
				});
				
				
			}
					
		}catch(e){
			console.log("Ocurrio un error en recepcion de sms");
		}
		
	}else{
		res.send(JSON.stringify({"e":true,"m":"Faltan datos u longitud maxima"}));
	}
	
});

//mongoose.connect('mongodb://localhost:27017/telemetria', (err, res) =>{
//	if (err){
//		return console.log(`Error al conectar a la base de datos: ${err}`);
//	} 
//	console.log('Conexión a la base de datos establecida...');
	app.listen(3000, function () {
		console.log('Online_Broadcast:Online:3000');
	  });

//});
