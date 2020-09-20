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
					
					if (tex.indexOf("Temp")>-1 || tex.indexOf("Humi")>-1 || tex.indexOf("GSM")>-1 || tex.indexOf("AIN")>-1 || tex.indexOf("DO1")>-1 || tex.indexOf("DO2")>-1 || tex.indexOf("DO3")>-1 || tex.indexOf("DIN")>-1){
						
						var nuevos = {"number":num,"port":por,"text":tex,"time":tim,"name":nam};
						var dbo = client.db(conexion.base);
						
						console.log("se guardo el sms");
						
						dbo.collection("sms").insertOne(nuevos);
						resolve(JSON.stringify({"m":true}));
						
					}else{
						
						resolve(JSON.stringify({"m":false}));
					}
					client.close();
				}catch (e){
				   reject(JSON.stringify({"m":"El error está en "+e}));
				   client.close();
				}
		  }

	  });		  
		
	});
};

module.exports = verificar;