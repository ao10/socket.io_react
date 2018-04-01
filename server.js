const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = 8080
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected.');

    socket.on('change color', (color) => {
        console.log('Color changed to: ', color);
        io.sockets.emit('change color', color);
    })

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
