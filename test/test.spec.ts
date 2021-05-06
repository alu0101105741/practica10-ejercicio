import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';

describe('MessageEventEmitterClient', () => {
  it('Should emit a message event once it gets a complete message', (done) => {
    const socket = new EventEmitter();
    const client = new EventEmitter();

    client.on('data', (data) => {
      expect(data).to.be.eql({'type': 'change', 'prev': 13, 'curr': 26});
      done();
    });

    socket.emit('data', 'Hola');
    socket.emit('data', ', "curr": 26}');
    socket.emit('data', '\n');
  });
});
