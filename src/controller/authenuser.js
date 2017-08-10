import { AuthenUsers } from '../models/authenuser' //as rename

export const setRoute = async (app) => {
    app.post('/authenuser', havedata);


}
export const havedata = async (req, res, next) => {
    // const json = req.body
    console.log(req.body)
    const callcheckreq = await checkreq(req.body);
    console.log(callcheckreq)
    if (callcheckreq) {
        return res.status(500).send("format should be")
    }

    const users = new AuthenUsers(req.body);
    const user = await AuthenUsers.findOne({ idUser: req.body.id });
    console.log(user)

    const callcreate = await createnewUser(user, req.body);
    if (callcreate) {
        console.log("create new user complete");
        //add to sprint 2 query data
        res.json({
            canAccessDashboard: true,
            fullname: req.body.fullName,
            token: req.body.token
        });
    }
    else {
        console.log("have a user already!!");
        //add to sprint 2 query data
        res.json({
            canAccessDashboard: false,
            fullname: req.body.fullName,
            token: req.body.token
        });
    }
}
export const checkreq = (body) => {
    if (!body.token || !body.id || !body.username) {
        return true
    }
    else {
        return false
    }
}
export const createnewUser = async (user, body) => {
    // const users = new AuthenUsers(body);
    // const user = await AuthenUsers.findOne({ idUser: body.id });
    if (!user) {
        const users = new AuthenUsers(body)
        const newuser = await AuthenUsers.create({
            idUser: body.id,
            username: body.username,
            fullname: body.fullName,
            token: body.token
        })
        return true
    }
    else {
        return false
    }
}




