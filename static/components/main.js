define(function(require, exports, module){
    console.log('start main')

    var f = require('foo');

    var c = require('bar');

    console.log('end main '+c +":"+ f)
})