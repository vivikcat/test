define(function(require){
    console.log('c.js dep a.js')
    var a = require('a');
    console.log(' loaded a such as: ')
    for (var _ in a) {
        console.log('   '+_+"="+a[_])
    }
    var _name = 'c';
    var _fn = function() {

    }
    console.log('c.js done.')
    return {
        _name: _name,
        _fn: _fn
    };
})