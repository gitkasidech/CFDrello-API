import {checkInf} from '../controller/createLCAD'

test('checkInf', () => {
    expect(checkInf({
        "name": "a"
    })).toBe(true);
    expect(checkInf({
        "idBoard": "1"
    })).toBe(true);
    expect(checkInf({
        "listComp": ["123a", "456b"]
    })).toBe(true);
    expect(checkInf({
        "colorComp": "#ff0000"
    })).toBe(true);
    expect(checkInf({
        "listInpr": ["789a"]
    })).toBe(true);
    expect(checkInf({
        "colorInpr": "#ff00ff"
    })).toBe(true);
    expect(checkInf({
        "listBack": ["789b"]
    })).toBe(true);
    expect(checkInf({
        "colorBack": "#ffffff"
    })).toBe(true);
    expect(checkInf({
        "idMember": "a1"
    })).toBe(true);
    expect(checkInf({
        "token": "1234"
    })).toBe(true);
    expect(checkInf({})).toBe(true);
    expect(checkInf({
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
    })) === (false);
})


