import http from 'http'
import url from 'url'
import { checkCreateLabels } from './labels'
import { checkCreateCards } from './cards'
import { checkCreateActions,getDateCreateBoard } from './actions'
import { countData } from './getDateActionCards'
import { createDateActionCards } from './dateActionCards'
import {convertDates,convertShortDates} from './convertDates'
import {Actions} from '../models/actions'

export const saveLCAD = async (req, res, next) => {
    console.log(`POST '/createlcad' 🤠 ${Date()}`)
    const inf = req.body
    const callInf = await checkInf(inf);
    if (callInf)
        return res.status(500).send("format should be")

    const key = "662fa775f48bd56cea11e8be634da284"
    const promises = [
        checkCreateLabels(inf.idBoard,key,inf.token),
        checkCreateCards(inf.idBoard,key,inf.token),
        getDateCreateBoard(inf.idBoard,key,inf.token)
    ]
    const [callLabels,callCards,callActionsDate] = await Promise.all(promises)
    const now = new Date()
    let iDate = new Date(callActionsDate)
    for(let i = new Date(callActionsDate); i <= now; i.setDate(i.getDate() + 1)){
        let sinceDate = await convertShortDates(iDate)
        iDate.setDate(iDate.getDate() + 1)
        let beforeDate = await convertShortDates(iDate)
        const callActions = await checkCreateActions(inf.idBoard,key,inf.token,sinceDate,beforeDate)
    }
    const postDateActionCards = await createDateActionCards(callActionsDate,inf)

    let d = new Date()
    d.setDate(d.getDate() - 1)
    let endDate = await convertShortDates(d)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let startDate = await convertShortDates(d)
    const data = {
        idDashboard: inf._id,
        start: startDate,
        end: endDate
    }
    const getDateActionCards = await countData(data)
    res.json(getDateActionCards)
}

export const checkInf = (inf) => {
    if (!inf.name || !inf.idBoard || !inf.listComp || !inf.colorComp || !inf.listInpr || !inf.colorInpr || !inf.listBack || !inf.colorBack || !inf.idMember || !inf.token) {
        return true
    } else {
        return false
    }
}

