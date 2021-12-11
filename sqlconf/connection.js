const {conf} = require('./conf');
const {Client} = require('pg');
const client = new Client(conf);

client.connect((err, cont) => {
	if(err) console.log('Ha sucedido un error')
	else console.log('Conectado correctamente')
});

module.exports = client;
