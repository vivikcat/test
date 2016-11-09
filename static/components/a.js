define(function(require){
    console.log('a.js dep b.js ')
    var b = require('b');
    console.log(' loaded b such as: ')
    for (var a in b) {
        console.log('   '+a+"="+b[a])
    }
    var _name = 'a';
    var _fn = function() {

    }
    console.log('a.js done.')
    return {
        _name: _name,
        _fn: _fn
    };
})