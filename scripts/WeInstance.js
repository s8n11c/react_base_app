const WebSocket = require('ws');
// this is a websocket test server for react-playground
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log("connected");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    ws.send(input)
  });

});
