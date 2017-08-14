var EventEmitter, util, greeter1;

EventEmitter = require('events');
util = require('util');

function Greetr() {
    this.greeting = 'This is the greeting you requested. You\'re welcome.';
} 

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting, data);
    this.emit('greet', data);
};

greeter1 = new Greetr();

greeter1.on('greet', function (d) {
    console.log('yea, it\'s over now', d);
});

greeter1.greet({OMFG:'lol'});