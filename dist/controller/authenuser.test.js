'use strict';

var _authenuser = require('./authenuser');

var _authens = require('authens');

var _authens2 = _interopRequireDefault(_authens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const AuthenUsers = new MockAuthens();
// jest.mock('../controller', () => {})
// jest.mock('./authenuser', () => {
//   return {
//     createnewUser: jest.fn().mockReturnValue(Promise.resolve([]))
//   }
// });

test('checkreq have token,idUser,username', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "username": "xxxxx",
        "token": "12345678"
    })) === false;
});

test('checkreq have token', function () {
    expect((0, _authenuser.checkreq)({
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have idUser', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1"
    })).toBe(true);
});

test('checkreq have username', function () {
    expect((0, _authenuser.checkreq)({
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq have token,idUser', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have token,username', function () {
    expect((0, _authenuser.checkreq)({
        "username": "xxxxx",
        "token": "12345678"
    })).toBe(true);
});

test('checkreq have idUser,username', function () {
    expect((0, _authenuser.checkreq)({
        "idUser": "1",
        "username": "xxxxx"
    })).toBe(true);
});

test('checkreq don\'t have idUser,username', function () {
    expect((0, _authenuser.checkreq)({})).toBe(true);
});

// test('create new user', async () => {
// const givenUser = {
//     idUser: "",
//     username: "",
//     fullname: "",
//     token: ""
// }
// const rec = await createnewUser(givenUser)
// expect(rec).toBe(true)

// const companies = ['Computerlogy', 'Mojito', 'BAY'].map((item, index) => ({_id: index, idUser: item}))
// const bayCompany = companies.find((com) => com.name === 'Computerlogy')
// const Computerlogy = await global['Domain'].findOne({ name: 'Computerlogy'})
// const General = await global['Domain'].findOne({ name: 'General'})
// bayCompany.domain_ids.push(Computerlogy._id);
// bayCompany.domain_ids.push(General._id);
// global['Company'].setRecords(companies)
// const domains = await findCorpusWithCompany('Computerlogy', global);
// expect(domains).toContain(Computerlogy)
// expect(domains).toContain(General)
// });

// test('old user', async () => {
//     const givenUser = {
//         idUser: "1",
//         username: "xxxxx",
//         fullname: "xxxx xxxxx",
//         token: "12345678"
//     }
//     const rec = await createnewUser(givenUser)
//     expect(rec).toBe(false)
// });
//# sourceMappingURL=authenuser.test.js.map