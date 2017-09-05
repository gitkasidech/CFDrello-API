'use strict';

var _convertDates = require('../controller/convertDates');

test('convertDates', function () {
    var d1 = new Date("2017-06-07T14:40:27.915Z");
    var d2 = new Date("2017-06-07T17:40:27.915Z");
    expect((0, _convertDates.convertDates)(d1)).toBe("2017-06-07-3");
    expect((0, _convertDates.convertDates)(d2)).toBe("2017-06-08-4");
    expect((0, _convertDates.convertDates)(d2)).not.toBe("2017-06-07-3");
});
//# sourceMappingURL=convertDates.test.js.map