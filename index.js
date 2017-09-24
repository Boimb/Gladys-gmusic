const install = require('./lib/install.js');
const init = require('./lib/init.js');


module.exports = function(sails) {


    return {
        install,
        init,
        debug
    };
};