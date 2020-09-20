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
					
				
					var dbo = client.db(conexion.base);
					var nuevos = {"number":num,"port":por,"text":tex,"time":tim,"name":nam};

					dbo.collection("tramaHistorico").insertOne(nuevos);
					client.close();
					
					resolve(JSON.stringify({"m":true}));
				
					
				}catch (e){
				   reject(JSON.stringify({"m":"El error está en "+e}));
				   client.close();
				}
		  }

	  });		  
		
	});
};

module.exports = verificar;