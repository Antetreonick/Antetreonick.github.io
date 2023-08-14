const WebSocket = require("wss");

const wss = new WebSocket.Server({ server: 'antetreonick.github.io', port: 8083 });

wss.broadcast = function(data) { wss.clients.forEach(client => client.send(data)); };

wss.on("connection", ws => {
    console.log("a new client connected!");

    ws.on("message", data => {
        wss.broadcast(`${data}`);
    });

    ws.on("close", () => {
        console.log("a client has been disconnected!")
    })
});
