const Promise = require('bluebird');
const playmusic = require('playmusic')
module.exports = (sails) => new Promise(function(resolve, reject) {

    console.log('init gmusic');
    const credentials = gladys.paramUser.getValues(['GMUSIC_USER', 'GMUSIC_PASS']);
    if(!credentials[0] || !credentials[1]) {
        throw new Error('Please create credentials for user');
    }


    // Check if credentials are ok
    if(false){
        reject(sails.log.warn('Bad google music credentials'));
    }

    resolve();

});
