import {DateActionCards} from '../models/dateActionCards'
import {convertDates} from './convertDates'
import {createHourActionCards} from './hourActionCards'

export const dayCountCards = async (req, res, next) => {
    console.log(`GET '/dateactioncards/${req.params.idDashboard}/${req.params.start}/${req.params.end}' 🤠 ${Date()}`)
    console.log(req.params.start)
    console.log(req.params.end)

    const data = {
        idDashboard: req.params.idDashboard,
        start: req.params.start,
        end: req.params.end
    }
    if(data.start == data.end && req.params.end !=1){
        const hourActionCards = await createHourActionCards(data)
        res.json(hourActionCards)
    }
    else{
        const getDateActionCards = await countData(data)
        res.json(getDateActionCards)
    }  
}

export const countData = async (data) => {
    let start = data.start
    let end = data.end
    let listDate = []
    let listBack = []
    let listInpr = []
    let listComp = []
    for (let d = new Date(start); d <= new Date(end); d.setDate(d.getDate() + 1)) {
        let ymdd = await convertDates(d)
        let dateActionCards = await DateActionCards.findOne({ dateString: ymdd, idDashboard: data.idDashboard})
        if(!dateActionCards){
            dateActionCards = {
                dateString: ymdd,
                countBack: 0,
                countInpr: 0,
                countComp: 0
            }
        }
        let [year, month, date, day] = ymdd.split('-')
        dateActionCards.dateString = [year, month, date].join('-')
        listDate.push(dateActionCards.dateString)
        listBack.push(dateActionCards.countBack)
        listInpr.push(dateActionCards.countInpr)
        listComp.push(dateActionCards.countComp)
    }
    const getDateActionCards = {
        listDate: listDate,
        listBack: listBack,
        listInpr: listInpr,
        listComp: listComp
    }
    return getDateActionCards
}


