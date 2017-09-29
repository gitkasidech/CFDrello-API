import {HourActionCards} from '../models/hourActionCards'
import {Actions} from '../models/actions'
import {Dashboards} from '../models/dashboards'
import {DateActionCards} from '../models/dateActionCards'
import {convertDates} from './convertDates'

export const createHourActionCards = async(data) => {
    const dataYesterday = await getYesterday(DateActionCards,data)
    let today = new Date(data.start)
    let thisDate = await convertDates(today)
    const actions =  await Actions.find({dateString: thisDate})
    const dashboard = await Dashboards.findOne({_id: data.idDashboard})
    if(!dashboard)
        return "Error!! Not found dashboard"
    const listBack = dashboard.listBack
    const listInpr = dashboard.listInpr
    const listComp = dashboard.listComp
    const len = actions.length

    let dataHour = []
    let dataBack = []
    let dataInpr = []
    let dataComp = []

    for (let i = 0; i <= 23; i++) {
        for (let j = 0; j < len; j++){
            const data = actions[j].data
            let d = new Date(actions[j].date)
            let hour = (d.getHours())
            if(i==hour){
                if(actions[j].type=="createCard" || actions[j].type=="moveCardToBoard" || actions[j].type== "copyCard" || actions[j].type== "convertToCardFromCheckItem"){
                    if (listBack.indexOf(data.list.id) != -1) dataYesterday.countBack++
                    else if (listInpr.indexOf(data.list.id) != -1) dataYesterday.countInpr++
                    else if (listComp.indexOf(data.list.id) != -1) dataYesterday.countComp++
                }
                else if(actions[j].type=="updateCard" && data.listAfter && data.listBefore){
                    if (listBack.indexOf(data.listAfter.id) != -1) dataYesterday.countBack++
                    else if (listInpr.indexOf(data.listAfter.id) != -1) dataYesterday.countInpr++
                    else if (listComp.indexOf(data.listAfter.id) != -1) dataYesterday.countComp++
    
                    if (listBack.indexOf(data.listBefore.id) != -1) dataYesterday.countBack--
                    else if (listInpr.indexOf(data.listBefore.id) != -1) dataYesterday.countInpr--
                    else if (listComp.indexOf(data.listBefore.id) != -1) dataYesterday.countComp--
                }
                else if(actions[j].type=="updateCard" && data.card.closed == false && data.old.closed == true){ 
                    if (listBack.indexOf(data.list.id) != -1) dataYesterday.countBack++
                    else if (listInpr.indexOf(data.list.id) != -1) dataYesterday.countInpr++
                    else if (listComp.indexOf(data.list.id) != -1) dataYesterday.countComp++
                }
                else if(actions[j].type=="updateCard" && data.card.closed == true && data.old.closed == false){ 
                    if (listBack.indexOf(data.list.id) != -1) dataYesterday.countBack--
                    else if (listInpr.indexOf(data.list.id) != -1) dataYesterday.countInpr--
                    else if (listComp.indexOf(data.list.id) != -1) dataYesterday.countComp--
                }
            }   
        }
        const allData = {
            dateString: thisDate,
            timeHour: i,
            countBack: dataYesterday.countBack,
            countInpr: dataYesterday.countInpr,
            countComp: dataYesterday.countComp,
            idDashboard: dashboard._id
        }
        const hourActionCards = await HourActionCards.findOne({ 
            dateString: allData.dateString, 
            timeHour: allData.timeHour,
            idDashboard: allData.idDashboard
        })
        dataHour.push(i)
        dataBack.push(allData.countBack)
        dataInpr.push(allData.countInpr)
        dataComp.push(allData.countComp)

        const callHourActionCards = await createnewHourActionCards(HourActionCards,allData,hourActionCards)
    }
    const getHourActionCards = {
        dataHour: dataHour,
        dataBack: dataBack,
        dataInpr: dataInpr,
        dataComp: dataComp
    }
    return getHourActionCards
}

export const getYesterday = async (DateActionCards,data) => {
    let d = new Date(data.start)
    d.setDate(d.getDate() - 1)
    let yesterday = await convertDates(d)
    let dateActionCards = await DateActionCards.findOne({ dateString: yesterday, idDashboard: data.idDashboard})
    if(!dateActionCards){
        let [year, month, date, day] = yesterday.split('-')
        yesterday = [year, month, date].join('-')
        let dateY = new Date(yesterday)
        dateActionCards = {
            date: dateY,
            dateString: yesterday,
            countBack: 0,
            countInpr: 0,
            countComp: 0,
            idDashboard: data.idDashboard
        }
    }
    return dateActionCards
}

export const createnewHourActionCards = async (HourActionCards,allData,hourActionCards) => {
    if (!hourActionCards) {
        const newHourActionCards = await HourActionCards.create(allData)
        return newHourActionCards
    }
    else if (allData.countBack != hourActionCards.countBack || allData.countInpr != hourActionCards.countInpr || allData.countComp != hourActionCards.countComp ) {
        const newHourActionCards = await HourActionCards.update({_id: hourActionCards._id},{$set:{
            countBack: allData.countBack,
            countInpr: allData.countInpr,
            countComp: allData.countComp
        }})
        return newHourActionCards
    } 
    else
        return false
}