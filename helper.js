const SALT = '9UYS*u7y^@hgs';
const moment = require('moment');
const sha256 = require('js-sha256');

module.exports.checkCookieForLogin = function (c) {
    if (Object.entries(c).length === 0) {
        return false;
    }

    if(c['loggedIn'] === sha256(c['username'] + SALT)) {
        return true;
    } else {
        return false;
    }
}

module.exports.hash = function (str) {
    return sha256(str + SALT);
}

module.exports.getCurrentDateTime = function () {
    return moment().format('YYYY MM DD, h:mm:ss');
}

module.exports.calculateAge = function (d) {
    return new Date().getFullYear() - new Date(d).getFullYear();
}