import io from 'socket.io-client';
const socket = io('http://localhost:8080');


function join(name, cb){
    socket.emit('join', name, cb);
}


function subscribeToTimer(cb){
    // socket.on('timer', timestamp => cb(null, timestamp));
    // socket.emit('subscribeToTimer', 1000);
    socket.on('connect', function(){
        console.log('User connected');
    });

    socket.on('event', function(data){
        console.log(data);
    });

    socket.on('disconnect', function(){
        console.log('User disconnected.');
    })

}

export { subscribeToTimer }