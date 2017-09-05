'use strict';

var _createLCAD = require('../controller/createLCAD');

test('checkInf', function () {
    expect((0, _createLCAD.checkInf)({
        "name": "a"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "idBoard": "1"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "listComp": ["123a", "456b"]
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "colorComp": "#ff0000"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "listInpr": ["789a"]
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "colorInpr": "#ff00ff"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "listBack": ["789b"]
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "colorBack": "#ffffff"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "idMember": "a1"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({
        "token": "1234"
    })).toBe(true);
    expect((0, _createLCAD.checkInf)({})).toBe(true);
    expect((0, _createLCAD.checkInf)({
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
//# sourceMappingURL=createLCAD.test.js.map