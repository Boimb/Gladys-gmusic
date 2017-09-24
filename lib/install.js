const Promise = require('bluebird');

module.exports = (sails) => new Promise(function(resolve, reject) {

    // create the login params with dummy values for ease of use
    // assuming account is related to user
    console.log('installing gladys-module');
    try {
        gladys.paramuser.setValue('GMUSIC_USER', 'EnterGmusicUserName');
        gladys.paramuser.setValue('GMUSIC_PASS', 'EnterGmusicPassword');

    }
    catch (err){
        reject(sails.log.error(err));
    }

    // No need to log installation, Gladys core does it.
    resolve();
});
