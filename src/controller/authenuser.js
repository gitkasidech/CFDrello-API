import UserModel from '../models/authenuser'
const AuthenUser = require('mongoose').model('AuthenUser');

export const setRoute = async (app) => {
    app.post('/authenuser',async (req, res, next) => {
        // const json = req.body
        // const {idUser, username, fullname, token, email} = json;
        if (!req.body.token||!req.body.idUser||!req.body.username) {
            res.status(500).send("format should be")
        }
        else{
            const users = new AuthenUser(req.body); 
            const user = await AuthenUser.findOne({idUser: req.body.idUser});
            if(!user){
                const newuser = await AuthenUser.create({
                idUser: req.body.idUser,
                username: req.body.username,
                fullname: req.body.fullname,
                token: req.body.token,
                email: req.body.email
            });
            //res.json(users);
            console.log("add complete");
            res.send('<h1>add New dashboard</h1>');
            }
            else{
                console.log("have a user already!!");
                res.send('<h1>dashboard</h1>');
            }
        }
        
    });
}

