import {connect} from 'net';
import yargs = require('yargs');

const client = connect({port: 60300});

client.emit('request', process.argv[2]);

client.on('close', () => {
  console.log('Disconnected.');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

yargs.parse();
