const SALT = '9UYS*u7y^@hgs';
const _ = require('lodash');
const moment = require('moment');
const sha256 = require('js-sha256');

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

module.exports.hash = function (str) {
    return sha256(str + SALT);
}

module.exports.formatDate = function (date) {
    return moment(date).format('YYYY-MM-DD');
}

module.exports.formatDateForDisplay = function (date) {
    return moment(date).format('DD MMM YYYY');
}

module.exports.formatDateTimeForDisplay = function (date) {
    return moment(date).format('DD MMM YYYY, h:mm:ss a');
}

module.exports.getCurrentDate = function () {
    return moment().format('YYYY-MM-DD');
}

module.exports.getCurrentDateTime = function () {
    return moment().format('YYYY MM DD, HH:mm:ss');
}

module.exports.calculateAge = function (date) {
    return new Date().getFullYear() - new Date(date).getFullYear();
}

module.exports.processDataForChart = function (dataset, xLabel, yLabel) {
    let x = [];
    let y = [];

    dataset = _.sortBy(dataset, [xLabel]);

    dataset.forEach((item) => {
        x.push(moment(item[xLabel]).format('YYYY-MM-DD'));
        y.push(Number(item[yLabel]));
    });

    return {
        yAxis: y,
        xAxis: x
    }
}