verificar = function() {
	return new Promise(function(resolve, reject) {
	
	  var conexion = require('../BaseDatos/accesoDatos');
	  conexion.MongoClient.connect(conexion.url, function(err1, client) {
	  conexion.assert.equal(null, err1);
	  if (err1){
			  reject(err1); 
		  }else{
				try {
					var dbo = client.db(conexion.base);
					dbo.collection("users").find({"rol":"1"}).toArray(function(err2, result) {
						if (err2){
							reject(err2);
						} else {
							resolve(result);
						}
					});
					client.close();
				} catch (e){
				   reject(JSON.stringify({"m":"El error está en "+e}));
				   client.close();
				}
				
		  }

	  });		  
		
	});
};

module.exports = verificar;