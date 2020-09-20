

if(process.argv[2]!==undefined && process.argv[3]!==undefined && process.argv[4]!==undefined){

	var net = require("net"),
		port = process.argv[2],
		port2 = process.argv[3],
		lugar = process.argv[4],
		socket = new net.Socket();

	
	var server2 = net.createServer(function(conexion){
		
		conexion.on("data",function(trama){
			
			var todo = trama.toString("hex");
			
			//var todo = "a5700071010001003836343530373033373133393333337f7f12061616051c03000000005003020100003003030100002003040100002003050100002003060100002003070100002005000000000005010000000005020000000005030000000010000e0000001100000000003000b81e454180f7a5";
			//var port2 = 8094;
			//var lugar ="colegio";
			
			function filtrar2(doceBit,callback){
			
				var uno = doceBit.substr(0,2);
				var dos = doceBit.substr(2,2);
				
				switch (uno) {
					case "02":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);

							return callback("Ain-0-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-1-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="02"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-2-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="03"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-3-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="04"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-4-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="05"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-5-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="06"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-6-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="7"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Ain-7-"+lugar+"-"+num.toFixed(2));
							
						}
						break;
					case "03":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("Dim-0-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-1-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="02"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-2-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="03"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-3-"+lugar+"-"+num.toFixed(2));
							
						} else if (dos=="04"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("Dim-4-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="05"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-5-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="06"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-6-"+lugar+"-"+num.toFixed(2));
							
						}else if(dos=="07"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Dim-7-"+lugar+"-"+num.toFixed(2));
							
						}
						break;
					case "04":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("Temperatura-1-"+lugar+"-"+num.toFixed(2));
							
						}else if (dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("Humedad-1-"+lugar+"-"+num.toFixed(2));
							
						}
						break;
					case "05":
						var tres = doceBit.substr(4,doceBit.length);
						
						var nuevoFiltro = dos.substr(0,1);
						var estatus = dos.substr(1,1);
						var mostra = "Close";
						
						if (estatus=="0"){
							mostra = "Open";
						}
						if (nuevoFiltro=="0"){
							return callback("Dout-0-"+lugar+"-"+mostra);
						}else if (nuevoFiltro=="1"){
							return callback("Dout-1-"+lugar+"-"+mostra);
						}else if (nuevoFiltro=="2"){
							return callback("Dout-2-"+lugar+"-"+mostra);
						}else if (nuevoFiltro=="3"){
							return callback("Dout-3-"+lugar+"-"+mostra);
						}
						break;
				}				
					
			}
			
			function pusher(todo2){
				
				var alarm = "",
				alarm1 = todo2.substr(6,2),
				listAlarm = todo2.substr(62,todo2.length),
				comboAlarm = listAlarm.substr(0,(listAlarm.length)-6),
				aux = 12,tram = todo2,todo2 = "0-0-0-0",e = 0;
				
				if (comboAlarm.length % 12 == 0){
					var kilo = comboAlarm.length / 12;
					
					function iterar2(aux,e){
						if (e < kilo){
							var otrox = comboAlarm.substr(aux,12);
							filtrar2(otrox,function(salida2){
								if(salida2.indexOf("*")==-1){
									todo2 = salida2 + "_" + todo2;
								}
							});
							aux = aux + 12;
							e++;
							iterar2(aux,e);
						}else{
							
							var fs = require('fs');
							fs.readFile('./trama_push_9999.txt','utf8', function(error2,data2) {
								
								if(error2){
									
									var fs = require('fs');
									fs.writeFile('./trama_push_9999.txt',todo2, function() {
										console.log('Guardado archivos push android');
									});
									
								}else{
									
									var nuevo = data2 +"_"+ todo2;
									
									var fs = require('fs');
									fs.writeFile('./trama_push_9999.txt',nuevo, function() {
										console.log('Guardado archivos push android');
									});
									
								}
								
							});
							
						}
					}
					
					iterar2(aux,e);
					
				}else{
					console.log("trama corrupta");
				}
					

			}
			
			pusher(todo);
			
			var alarm = "",
				alarm1 = todo.substr(6,2),
				listAlarm = todo.substr(62,todo.length),
				comboAlarm = listAlarm.substr(0,(listAlarm.length)-6),
				aux = 12,tram = todo,todo = [],e = 0;
								
				//filtro(alarm1,function(salida){
				//	todo.push(salida);
				//});
		
			
			function filtrar(doceBit,callback){
			
				var uno = doceBit.substr(0,2);
				var dos = doceBit.substr(2,2);
				
				switch (uno) {
					case "02":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);

							return callback("Sensor*0*"+num.toFixed(2));
							
						}else if(dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*1*"+num.toFixed(2));
							
						}else if(dos=="02"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*2*"+num.toFixed(2));
							
						}else if(dos=="03"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*3*"+num.toFixed(2));
							
						}else if(dos=="04"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*4*"+num.toFixed(2));
							
						}else if(dos=="05"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*5*"+num.toFixed(2));
							
						}else if(dos=="06"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*6*"+num.toFixed(2));
							
						}else if(dos=="7"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Sensor*7*"+num.toFixed(2));
							
						}
						break;
					case "03":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("DIM*0*"+num.toFixed(2));
							
						}else if(dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*1*"+num.toFixed(2));
							
						}else if(dos=="02"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*2*"+num.toFixed(2));
							
						}else if(dos=="03"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*3*"+num.toFixed(2));
							
						} else if (dos=="04"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);

							return callback("DIM*4*"+num.toFixed(2));
							
						}else if(dos=="05"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*5*"+num.toFixed(2));
							
						}else if(dos=="06"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*6*"+num.toFixed(2));
							
						}else if(dos=="07"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("DIM*7*"+num.toFixed(2));
							
						}
						break;
					case "04":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);

							return callback("Temperature*1*"+num.toFixed(2));
							
						}else if (dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1); 

							return callback("Humedy*1*"+num.toFixed(2));
							
						}
						break;
					case "05":
						
						var estatus = dos.substr(0,1);
						var nuevoFiltro = dos.substr(1,1);
						var mostra = "Close";
						if (estatus=="0"){
							mostra = "Open";
						}
						if (nuevoFiltro=="0"){
							return callback("Dout*0*"+mostra);
						}else if (nuevoFiltro=="1"){
							return callback("Dout*1*"+mostra);
						}else if (nuevoFiltro=="2"){
							return callback("Dout*2*"+mostra);
						}else if (nuevoFiltro=="3"){
							return callback("Dout*3*"+mostra);
						}
						break;
					case "10":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="10"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("GSM*SIGNAL*"+num.toFixed(2));
							
						}else if(dos=="00"){
							
							var tres = doceBit.substr(4,doceBit.length);
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							
							return callback("GSM*SIGNAL*"+num.toFixed(2));
							
						}
						break;
					case "11":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var tres = doceBit.substr(4,doceBit.length);
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getInt32(0, 1);
							
							return callback("Arm/Disarm*Status*"+num.toFixed(2));
							
						}
						break;
					case "30":
						var tres = doceBit.substr(4,doceBit.length);
						if (dos=="00"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Voltage*External*"+num.toFixed(2));
							
						}else if(dos=="01"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("ac_power*suplay*"+num.toFixed(2));
							
						}else if(dos=="02"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Voltage*External*"+num.toFixed(2));
							
						}else if(dos=="30"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("ac_power*suplay*"+num.toFixed(2));
							
						}else if(dos=="10"){
							
							var datosx = tres.match(/../g);
							var buf = new ArrayBuffer(4),
								view = new DataView(buf);
								
							datosx.forEach(function (b, i) {
								view.setUint8(i, parseInt(b, 16));
							});
							var num = view.getFloat32(0, 1);
							
							return callback("Battery*Voltage*"+num.toFixed(2));
							
						}
						break;
					default: 
						alarm = "x*x*x";
				}				
					
			}
			
			if (comboAlarm.length % 12 == 0){
				var kilo = comboAlarm.length / 12;
				
				function iterar(aux,e){
					if (e < kilo){
						var otrox = comboAlarm.substr(aux,12);
						filtrar(otrox,function(salida){
							todo.push(salida);
						});
						aux = aux + 12;
						e++;
						iterar(aux,e);
					}else{
						
						var moment = require('moment');
						var query ={};
						query.number = 0;
						query.port = port2;
						query.text = JSON.stringify(todo);
						query.time = moment().format('DD/MM/YYYY hh:mm:ssa');
						query.name = "No asignado";
						
						/*var funtionAdd3 = require('./Funciones/agregarTrama');
						funtionAdd3(query).then(function(salida2) {
							console.log('Guardado en historico de trama');
						}).catch(function(err) {
							console.log("Error al guardar historico trama ",err);
						});*/
						
						var funtionAdd2 = require('./Funciones/agregarHistorico');
						funtionAdd2(query).then(function(salida3) {
							console.log('Guardado en historico 24/7');
						}).catch(function(err) {
							console.log("Error al guardar historico trama ",err);
						});
						
						var fs = require('fs');
						fs.writeFile('./trama'+port2+'.txt',JSON.stringify(todo), function() {
							console.log('Guardado archivo de trama correctamente');
						});
					}
				}
				
				iterar(aux,e);
				
			}else{
				console.log("trama corrupta");
			}
			
			function filtro(alarm1,callback){

				switch (alarm1) {
					case "70":
						alarm = "Alarm";
						break;
					case "71":
						alarm = "Upload*the*data*in*Timer";
						break;
					case "80":
						alarm = "Random*Number,*Time";
						break;
					case "81":
						alarm = "Set*the*Server*IP";
						break;
					case "82":
						alarm = "Inquiry*the*Server*IP";
						break;
					case "83":
						alarm = "Set*the*Alarm*Phone*Number";
						break;
					case "84":
						alarm = "Inquiry*the*Alarm*Phone*Number";
						break;
					case "85":
						alarm = "Program*the*Relay";
						break;
					case "86":
						alarm = "Inquiry*the*Relay";
						break;
					case "87":
						alarm = "Program*the*AIN";
						break;
					case "88":
						alarm = "Inquiry*the*AIN";
						break;
					case "89":
						alarm = "Program*the*DIN";
						break;
					case "8a":
						alarm = "Inquiry*the*DIN";
						break;
					case "8b":
						alarm = "Program*the*Interlock";
						break;
					case "8c":
						alarm = "Inquiry*the*Interlock";
						break;
					case "8d":
						alarm = "Program*the*Timer";
						break;
					case "8e":
						alarm = "Inquiry*the*Timer";
						break;
					case "8f":
						alarm = "Program*the*Arm/Disarm";
						break;
					case "94":
						alarm = "Inquiry*the*Device*ID";
						break;
					case "97":
						alarm = "Inquiry*the*Current*Value";
						break;
					case "99":
						alarm = "Control*the*Relay*via*APP";
						break;
					case "a0":
						alarm = "Upgrade*Information";
						break;
					case "a1":
						alarm = "Get*the*Upgrade*Information";
						break;
					case "8f":
						alarm = "Program*the*Arm/Disarm";
						break;
					default: 
						alarm = "x*x*x";
				}
				return callback(alarm);
				
			}

			
		});	
	});

	server2.listen(port);

	var WebSocketServer = require('websocket').server;
	var http = require('http');

	var server = http.createServer(function(request, response) {
		response.writeHead(200);
		response.write("Online_Popup_trama:active:"+port2);
		response.end();
	});
	server.listen(port2, function() {
		console.log("Online_Popup_trama:active:"+port2);
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
					fs.readFile('./trama'+port2+'.txt','utf8', function(errorb,datab) {
						
						if (datab!==undefined){
							console.log('Leyendo diferencia de tramas');
							connection.send(datab); 
						}
						
					});
				}
			}
		});

		connection.on('close', function(connection) {
			console.log(JSON.stringify({"e":false,"m":"Desconexion de usuario con ip "+request.origin}));
		});
	});
	
	
	
}else{
	console.log("No posee argumento de puerto por default...");
	console.log("Ejecute segun sea su preferencia de puerto para trama");
	console.log("node Trama.js PORT_TRAMA PORT_SOCKET Element_nombre");
	console.log("node Trama.js 18001 8089 colegio");
}

