const Promise = require('bluebird');

module.exports = (sails) => new Promise(function(resolve, reject) {

    // create the login params with dummy values for ease of use
    // assuming account is related to user
    gladys.paramuser.setValue('GMUSIC_USER', 'EnterGmusicUserName');
    gladys.paramuser.setValue('GMUSIC_PASS', 'EnterGmusicPassword');

    // No need to log installation, Gladys core does it.
    resolve();
});
