// Import events module
var events = require('events');

//Buat object eventEmitter
var eventEmitter = new events.EventEmitter();

//Buat event handler
var connectHandler = function connected() {
    console.log('connection successful.');

    //Fire the data_received event
    eventEmitter.emit('data_received');
}

//Menggabungkan connection event dengan handler
eventEmitter.on('connection', connectHandler);

//Menggabungkan event data_received dengan fungsi anonymous
eventEmitter.on('data_received', function() {
    console.log('data received successful.');
});

//Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");