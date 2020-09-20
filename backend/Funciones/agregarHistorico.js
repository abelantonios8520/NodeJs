verificar = function(coleccion) {
	return new Promise(function(resolve, reject) {
	
	  var conexion = require('../BaseDatos/accesoDatos');
	  conexion.MongoClient.connect(conexion.url, function(err1, client) {
	  conexion.assert.equal(null, err1);
	  if (err1){
			  reject(err1); 
		  }else{
				try {
					
					var num = coleccion.number;
					var por = decodeURI(coleccion.port);
					var tex = decodeURI(coleccion.text); 
					var tim = decodeURI(coleccion.time);
					var nam = decodeURI(coleccion.name);
					
					if (tex.indexOf("GSM")>-1 || tex.indexOf("AIN")>-1 || tex.indexOf("DO1")>-1 || tex.indexOf("DO2")>-1 || tex.indexOf("DO3")>-1 || tex.indexOf("DIN")>-1){
						
						
						var dbo = client.db(conexion.base);
						
						var fs = require('fs');
						fs.readFile('./contador.txt','utf8', function(error,data) {
							if(error){
								var ini = 1;
							}else{
								var ini = parseInt(data) + 1;
							}
							
							var nuevos = {"number":num,"port":por,"text":tex,"time":tim,"name":nam,"con":ini};
							console.log("Leido para conteo");
							
							var fs = require('fs');
							fs.writeFile('./contador.txt',ini, function() {
								console.log('Guardado para conteo');
							});
							
							dbo.collection("smsHistorico").insertOne(nuevos);
							client.close();
							resolve(JSON.stringify({"m":true}));
							
							
							
						});
						
						
						
					}else{
						
						resolve(JSON.stringify({"m":false}));
					}
					
				}catch (e){
				   reject(JSON.stringify({"m":"El error está en "+e}));
				   client.close();
				}
		  }

	  });		  
		
	});
};

module.exports = verificar;