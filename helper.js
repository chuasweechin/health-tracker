const SALT = '9UYS*u7y^@hgs';
const sha256 = require('js-sha256');

let addZero = function(n) {
    if (n < 10) {
        n = "0" + n;
    }

    return n;
}

module.exports.getCurrentDateAndTime = function() {
    let date = new Date();

    return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() } ` +
           `${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }:${ addZero(date.getSeconds()) }`;
}

module.exports.checkCookieForLogin = function (cookie) {
    if (Object.entries(cookie).length === 0) {
        return false;
    }

    if(cookie['loggedIn'] === sha256(cookie['username'] + SALT)) {
        return true;
    } else {
        return false;
    }
}

module.exports.calculateAge = function (birthday) {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
}