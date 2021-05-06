import {connect} from 'net';
import yargs = require('yargs');

const client = connect({port: 60300});

client.write(process.argv[2] + '\n');

client.on('close', () => {
  console.log('Disconnected.');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

yargs.parse();
