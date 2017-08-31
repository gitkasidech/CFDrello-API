import { checkCreateLabels } from './labels'
import { checkCreateCards } from './cards'
import { checkCreateActions } from './actions'

export const saveLCA = async(req, res, next) => {
    console.log(`POST '/actioncards' 🤠 ${Date()}`)
    const inf = req.body
    console.log(inf)
    const callInf = await checkInf(inf);
    console.log(callInf)
    if (callInf)
        return res.status(500).send("format should be")

    const key = "662fa775f48bd56cea11e8be634da284"
    const callCreate = await checkCreateLabels(inf.idBoard,key,inf.token)
    const callCards = await checkCreateCards(inf.idBoard,key,inf.token)
    const callActions = await checkCreateActions(inf.idBoard,key,inf.token)
    // return res.json({idDashboard: callCreate._id})
    res.send("OK")
}

export const checkInf = (inf) => {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember || !inf.token) {
        return true
    } else {
        return false
    }
}