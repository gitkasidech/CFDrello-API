import createnewUser from './authenuser'

test('create new user', () => {
    expect(creatnewUser({
        "idUser": "1",
        "username": "xxxxx",
        "fullname": "xxxx xxxxx",
        "token": "12345678",
        "email": " "
    })).toBe(true);
});