const install = require('./lib/install.js');
const init = require('./lib/init.js');
const debug  = require('./lib/debug');

gladys.on('ready', function(){
    init().catch(sails.log.warn);
});

module.exports = function(sails) {


    return {
        install: install,
        init: init,
        debug: debug
    };
};