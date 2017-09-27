'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var convertDates = exports.convertDates = function convertDates(d) {
    var month = '' + (d.getMonth() + 1);
    var date = '' + d.getDate();
    var day = '' + d.getDay();
    var year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (date.length < 2) date = '0' + date;

    var ymd = [year, month, date, day].join('-');
    return ymd;
};

var convertShortDates = exports.convertShortDates = function convertShortDates(d) {
    var month = '' + (d.getMonth() + 1);
    var date = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (date.length < 2) date = '0' + date;

    var ymd = [year, month, date].join('-');
    return ymd;
};
//# sourceMappingURL=convertDates.js.map