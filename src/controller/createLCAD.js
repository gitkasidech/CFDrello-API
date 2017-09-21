import http from 'http'
import url from 'url'
import { checkCreateLabels } from './labels'
import { checkCreateCards } from './cards'
import { checkCreateActions } from './actions'
import { countData } from './getDateActionCards'
import { createDateActionCards } from './dateActionCards'
import {convertDates} from './convertDates'
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
        checkCreateActions(inf.idBoard,key,inf.token)
    ]
    const [callLabels,callCards,callActions] = await Promise.all(promises) 
    console.log(callActions)
    const postDateActionCards = await createDateActionCards(callActions,inf)

    let d = new Date()
    d.setDate(d.getDate() - 1)
    let endDate = await convertDates(d)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let startDate = await convertDates(d)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
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

