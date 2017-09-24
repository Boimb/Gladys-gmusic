const install = require('./lib/install.js');
const init = require('./lib/init.js');
const debug  = require('lib/debug');

module.exports = function(sails) {


    return {
        install,
        init,
        debug
    };
};