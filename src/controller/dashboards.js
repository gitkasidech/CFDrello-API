import {Dashboards} from '../models/dashboards' //as rename

export const saveData = async(req, res, next) => {
    console.log(`POST '/dashboards' 🤠 ${Date()}`)
    const inf = req.body
    console.log(inf)
    const callInf = await checkInf(inf);
    console.log(callInf)
    if (callInf)
        return res.status(500).send("format should be")

    const callCreate = await createnewDashboards(Dashboards, inf);
    console.log("create new dashboards complete");
    console.log(callCreate);
    return res.json({idDashboard: callCreate._id})
}

export const checkInf = (inf) => {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember) {
        return true
    } else {
        return false
    }
}

export const createnewDashboards = async(Dashboards, inf) => {
    const newDashboards = await Dashboards.create({
        name: inf.name,
        idBoard: inf.idBoard,
        listComp: inf.listComp,
        colorComp: inf.colorComp,
        listInpr: inf.listInpr,
        colorInpr: inf.colorInpr,
        listBack: inf.listBack,
        colorBack: inf.colorBack,
        idMember: inf.idMember
    })
    return newDashboards
}