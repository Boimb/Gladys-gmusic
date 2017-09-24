const Promise = require('bluebird');

module.exports = (sails) => new Promise(function(resolve, reject) {

    // create the login params with dummy values for ease of use
    // assuming account is related to user
    console.log('installing gladys-gmusic');
    try {
        gladys.paramUser.setValue('GMUSIC_USER', 'EnterGmusicUserName');
        gladys.paramUser.setValue('GMUSIC_PASS', 'EnterGmusicPassword');

    }
    catch (err){
        reject(sails.log.error(err));
    }

    // No need to log installation, Gladys core does it.
    resolve();
});
