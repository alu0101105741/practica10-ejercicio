import * as fs from 'fs';
import * as net from 'net';

net.createServer((connection) => {
  console.log('A client has connected.');

  connection.on('data', (data) => {
    fs.appendFileSync('./dist/mensajes.txt', '{Port: ' + connection.remotePort + ', ' + 'Ip: ' + connection.remoteAddress + ', ' + 'Message: ' + data.toString() + '}\n');

    connection.write('Message succesfully received!');
  });

  connection.on('close', () => {
    console.log('A client has disconnected.');
  });
}).listen(60300, () => {
  console.log('Waiting for clients to connect.');
});
