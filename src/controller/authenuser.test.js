import { createnewUser, checkreq } from './authenuser'
import MockAuthens from 'authens';

test('checkreq', () => {
    expect(checkreq({
        "token": "12345678"
    })).toBe(true);
    expect(checkreq({
        "id": "1"
    })).toBe(true);
    expect(checkreq({
        "username": "xxxxx"
    })).toBe(true);
    expect(checkreq({
        "id": "1",
        "token": "12345678"
    })).toBe(true);
    expect(checkreq({
        "username": "xxxxx",
        "token": "12345678"
    })).toBe(true);
    expect(checkreq({
        "id": "1",
        "username": "xxxxx"
    })).toBe(true);
    expect(checkreq({})).toBe(true);
    expect(checkreq({
        "id": "1",
        "username": "xxxxx",
        "token": "12345678"
    })) === (false);
});

test('old user', async () => {   
    const user = {
        id: "001",
        username: "xxx",
        fullname: "yyy",
        token: "zzz"
    }
    const givenUser = {
        id: "001",
        username: "xxx",
        fullname: "yyy",
        token: "zzz"
    }
    const rec = await createnewUser(user, givenUser)
    expect(rec).toBe(false)
});

// test('new user', async () => {
//     const user = null
//     const givenUser = {
//         id: "001",
//         username: "xxx",
//         fullname: "yyy",
//         token: "zzz"
//     }
//     const rec = await createnewUser(givenUser)
//     expect(rec).toBe(true)
// });



