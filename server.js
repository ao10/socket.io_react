const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')();
const port = process.env.PORT || 8080;


// app.get('/', (req, res) => {
//     res.send({express: 'Hello from Express!'});
// });

io.on('connection', (socket) => {
    // Here you can start emitting events to the client.
    // client.on('subscribeToTimer', (interval) => {
    //     console.log('Client is subscribing to timer with inteval', interval);
    //     setInterval(() => {
    //         client.emit('timer', new Date());            
    //     }, interval);
    // });
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    })
});

// io.listen(port);


io.listen(port, () => console.log(`Listening on port ${port}`));
