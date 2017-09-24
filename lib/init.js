const Promise = require('bluebird');
const playmusic = require('playmusic')
module.exports = (sails) => new Promise(function(resolve, reject) {

    // Check if credentials are ok
    if(false){
        reject(sails.log.info('Bad google music credentials'));
    }

    resolve();

});
