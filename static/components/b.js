define(function(require){
    console.log('b.js dep c.js ')
    var c = require('c');
    console.log(' loaded c such as: ')
    for (var a in c) {
        console.log('   '+a+"="+c[a])
    }
    var _name = 'b';
    var _fn = function() {

    }
    console.log('b.js done.')
    return {
        _name: _name,
        _fn: _fn
    };
})