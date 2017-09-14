import {convertDates} from '../controller/convertDates'

test('convertDates', () => {
    let d1 = new Date("2017-06-07T14:40:27.915Z")
    let d2 = new Date("2017-06-07T17:40:27.915Z")
    expect(convertDates(d1)).toBe("2017-06-07-3")
    expect(convertDates(d2)).toBe("2017-06-08-4")
    expect(convertDates(d2)).not.toBe("2017-06-07-3")
})


