import { Members } from '../models/members' //as rename
import { checkCreateBoard } from './boards'

export const havedata = async (sendData) => {
    const inf = sendData
    const callcheckreq = await checkreq(inf);
    if (callcheckreq) 
        return res.status(500).send("format should be")

    const user = await Members.findOne({ id: inf.id });

    const callcreate = await createnewUser(Members,user, inf);
    if (callcreate) {
        console.log("create or update new user complete");
    }
    else {
        console.log("have a user already!!");
    }
    const callBoards = await checkCreateBoard(inf)
}

export const checkreq = (inf) => {
    if (!inf.token || !inf.id || !inf.username || !inf.app_id || !inf.idBoards) {
        return true
    }
    else {
        return false
    }
}

export const createnewUser = async (Members,user, body) => {
    if (!user) {
        const newuser = await Members.create({
            id: body.id,
            username: body.username,
            fullName: body.fullName,
            token: body.token,
            idBoards : body.idBoards
        })
        return newuser
    }
    else if (user.username != body.username || user.fullName != body.fullName || (user.idBoards).toString() != (body.idBoards).toString()) {
        const newuser = await Members.update({id: body.id},{$set:{
            username: body.username,
            fullName: body.fullName,
            idBoards : body.idBoards
        }})
        return newuser
    }
    else 
        return false
}