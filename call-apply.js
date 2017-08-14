var obj = {
    name: 'obj 1',
    greet: function () {
        console.log(`Hello, ${this.name}`, arguments);
    }
};

obj.greet();

obj.greet.call({name:'obj 2'}, '1', '2', '3');
obj.greet.apply({name:'obj 3'}, ['one', 'two', 'three']);