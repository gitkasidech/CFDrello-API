'use strict';

var _createLCA = require('./createLCA');

test('checkInf', function () {
    expect((0, _createLCA.checkInf)({
        "name": "a"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "idBoard": "1"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "listComp": ["123a", "456b"]
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "colorComp": "#ff0000"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "listInpr": ["789a"]
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "colorInpr": "#ff00ff"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "listBack": ["789b"]
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "colorBack": "#ffffff"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "idMember": "a1"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({
        "token": "1234"
    })).toBe(true);
    expect((0, _createLCA.checkInf)({})).toBe(true);
    expect((0, _createLCA.checkInf)({
        "name": "a",
        "idBoard": "1",
        "listComp": ["123a", "456b"],
        "colorComp": "#ff0000",
        "listInpr": ["789a"],
        "colorInpr": "#ff00ff",
        "listBack": ["789b"],
        "colorBack": "#ffffff",
        "idMember": "a1",
        "token": "1234"
    })) === false;
});
//# sourceMappingURL=createLCA.test.js.map