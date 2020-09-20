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
					var moment = require('moment');
					var otro = moment().format('YYYY/MM/DD');
					dbo.collection("sms").find({time:{$regex:otro}}).toArray(function(err2, result) {
						if (err2){
							reject(JSON.stringify({"m":err2}));
							client.close();
						} else {
							resolve(JSON.stringify({"m":result}));
							client.close();
						}
					});
				} catch (e){
				   reject(JSON.stringify({"m":"El error está en "+e}));
				   client.close();
				}
				
		  }

	  });		  
		
	});
};

module.exports = verificar;