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

module.exports.formatDateTime = function (date) {
    return moment(date).format('Do MMM YYYY, h:mm:ss a');
}

module.exports.getCurrentDateTime = function () {
    return moment().format('YYYY MM DD, HH:mm:ss');
}

module.exports.calculateAge = function (date) {
    return new Date().getFullYear() - new Date(date).getFullYear();
}

module.exports.processDataForChart = function (dataset, xLabel, yLabel) {
    let y = [];
    let x = [];

    dataset.forEach((item) => {
        x.push(Number(item[xLabel]));
        y.push(moment(item[yLabel]).format('YYYY-MM-DD'));
    })

    return {
        yAxis: x,
        xAxis: y
    }
}