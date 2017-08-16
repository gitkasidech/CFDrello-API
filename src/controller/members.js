import { Members } from '../models/members' //as rename

export const setRoute = async (app) => {
    app.post('/members', havedata);
}
export const havedata = async (req, res, next) => {
    console.log(req.body)
    const callcheckreq = await checkreq(req.body);
    console.log(callcheckreq)
    if (callcheckreq) {
        return res.status(500).send("format should be")
    }

    const user = await Members.findOne({ id: req.body.id });
    console.log(user)

    const callcreate = await createnewUser(user, req.body);
    if (callcreate) {
        console.log("create new user complete");
        //add to sprint 2 query data
        res.json({
            canAccessDashboard: true,
            fullname: req.body.fullName,
            token: req.body.token,
            idBoards : req.body.idBoards
        });
    }
    else {
        console.log("have a user already!!");
        //add to sprint 2 query data
        res.json({
            canAccessDashboard: false,
            fullname: req.body.fullName,
            token: req.body.token,
            idBoards : req.body.idBoards
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
    if (!user) {
        const newuser = await Members.create({
            id: body.id,
            username: body.username,
            fullname: body.fullName,
            token: body.token,
            idBoards : body.idBoards
        })
        return true
    }
    else {
        return false
    }
}