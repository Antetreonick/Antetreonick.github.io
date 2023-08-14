const WebSocket = require("wss");

const socket = new WebSocket.Server({ server: 'antetreonick.github.io', port: 8083 });

socket.broadcast = function(data) { socket.clients.forEach(client => client.send(data)); };

socket.on("connection", ws => {
    console.log("a new client connected!");

    ws.on("message", data => {
        socket.broadcast(`${data}`);
    });

    ws.on("close", () => {
        console.log("a client has been disconnected!")
    })
});
