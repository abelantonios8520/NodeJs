verificar = function(coleccion) {
	return new Promise(function(resolve, reject) {
	
	  var conexion = require('../BaseDatos/accesoDatos');
	  conexion.MongoClient.connect(conexion.url, function(err1, client) {
	  conexion.assert.equal(null, err1);
	  if (err1){
			  reject(err1); 
		  }else{
				try {
					
					var fs = require('fs');
					fs.writeFile('./contador.txt',"0", function() {
						console.log('Guardado para conteo');
					});
					
					/*dbo.collection("smsHistorico").insertOne(nuevos);
					resolve(JSON.stringify({"m":true}));*/
					
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