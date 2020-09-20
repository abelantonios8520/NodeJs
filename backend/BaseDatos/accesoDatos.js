var conexionDatos = require('./conexionDatos');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const f = require('util').format;
const user = encodeURIComponent(conexionDatos.user);
const password = encodeURIComponent(conexionDatos.pass);
const authMechanism = 'DEFAULT';
const url = f('mongodb://%s:%s@'+conexionDatos.host+':'+conexionDatos.port+'/'+conexionDatos.base+'?authMechanism=%s',user, password, authMechanism);

module.exports = {"url":url,"assert":assert,"MongoClient":MongoClient,"base":conexionDatos.base};

/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/telemetria',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('Conexión exitosa a mongodb'))
    .catch(err => console.error(err));*/