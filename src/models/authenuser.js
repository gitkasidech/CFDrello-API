import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/AuthenUser', function (err) {
    if (err) {
        console.log(err);
    }
}); 

const AuthenUserSchema = mongoose.Schema({
    idUser: String,
    username: String,
    fullname: String,
    token: String,
    email: String
});

export const AuthenUsers = mongoose.model('AuthenUser', AuthenUserSchema);


