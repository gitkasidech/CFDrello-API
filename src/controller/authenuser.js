import { AuthenUsers } from '../models/authenuser' //as rename

export const setRoute = async (app) => {
    app.post('/authenuser', havedata);


}
export const havedata = async (req, res, next) => {
    // const json = req.body
    // const {idUser, username, fullname, token, email} = json;
    const callcheckreq = await checkreq(req.body);
    if (callcheckreq) {
        return res.status(500).send("format should be")
    }

    const callcreate = await createnewUser(req.body);
    if (callcreate) {
        console.log("create new user complete");
        res.json({ canAccessDashboard: true });
    }
    else {
        console.log("have a user already!!");
        res.json({ canAccessDashboard: false });
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
export const createnewUser = async (body) => {
    const users = new AuthenUsers(body);
    const user = await AuthenUsers.findOne({ idUser: body.id });
    if (!user) {
        const newuser = await AuthenUsers.create({
            idUser: body.id,
            username: body.username,
            fullname: body.fullname,
            token: body.token
        });
        return true
    }
    else {
        return false
    }
}

// export const authenuserController = async (req, res, next) => {
//         // const json = req.body
//         // const {idUser, username, fullname, token, email} = json;
//         if (!req.body.token||!req.body.idUser||!req.body.username) {
//             res.status(500).send("format should be")
//         }
//         else{
//             const users = new AuthenUser(req.body); 
//             const user = await AuthenUser.findOne({idUser: req.body.idUser});
//             if(!user){
//                 const newuser = await AuthenUser.create({
//                 idUser: req.body.idUser,
//                 username: req.body.username,
//                 fullname: req.body.fullname,
//                 token: req.body.token,
//                 email: req.body.email
//             });
//             //res.json(users);
//             console.log("add complete");
//             res.send('<h1>add New dashboard</h1>');
//             }
//             else{
//                 console.log("have a user already!!");
//                 res.send('<h1>dashboard</h1>');
//             }
//         }

// }

