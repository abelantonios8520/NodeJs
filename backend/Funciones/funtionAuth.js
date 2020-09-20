verificar = function(pass,user) {
	return new Promise(function(resolve, reject) {
		
		function Cipher(text, callback) {
			var moment = require('moment');
			var bound = 0x10000,otro = moment().format('DD');
			rotation = parseInt(-otro) % bound;
			if(rotation === 0) return callback(text);
			return callback(String.fromCharCode.apply(null,
				text.split('').map(function(v) {
					return (v.charCodeAt() + rotation + bound) % bound;
				})
			));
		}
		
		var conexion = require('../BaseDatos/accesoDatos');
		  conexion.MongoClient.connect(conexion.url, function(err1, client) {
		  conexion.assert.equal(null, err1);
		  if (err1){
			  reject(err1); 
		  }else{
				var dbo = client.db(conexion.base);
				
				dbo.collection("users").find({"email":user}).limit(1).toArray(function(err2, result) {
					if (err2){
						reject(err2);
					} else {
						if (result.length == 0){
							reject("Login invalido");
						}else{
							
							if (pass==result[0].passw0rd){
								var email = result[0].email,nombre = result[0].name,rol = result[0].rol;
								
								var tokenSenci = Cipher(email,function(salidax){
									var newtoken = {"n":nombre,"e":email,"r":rol,"t":salidax};
									resolve(JSON.stringify(newtoken));
								});
								
							}else{
								reject("Login invalido");
							}
						}	
					}
				});
			  
			  client.close();
		  }
		});
	});
};

module.exports = verificar;