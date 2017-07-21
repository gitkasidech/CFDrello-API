import { AuthenUser } from '../models/authenuser' //as rename

export const setRoute = async (app) => {
    app.post('/authenuser', havedata);


}
export const havedata = async (req, res, next) => {
    // const json = req.body
    // const {idUser, username, fullname, token, email} = json;
    if (!req.body.token || !req.body.idUser || !req.body.username) {
        return res.status(500).send("format should be")
    }
    const callcreate = await creatnewUser(req.body);
    if(callcreate){
        res.send('<h1>add New dashboard</h1>');
    }
    else{
        res.send('<h1>dashboard</h1>');
    }

}
export const creatnewUser = async (body) => {
    const users = new AuthenUser(body);
    const user = await AuthenUser.findOne({ idUser: body.idUser });
    if (!user) {
        const newuser = await AuthenUser.create({
            idUser: body.idUser,
            username: body.username,
            fullname: body.fullname,
            token: body.token,
            email: body.email
        });
        //res.json(users);
        console.log("add complete");
        // res.send('<h1>add New dashboard</h1>');
        return true
    }
    else {
        console.log("have a user already!!");
        // res.send('<h1>dashboard</h1>');
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

