import {Actions} from '../models/actions'
import {convertDates} from './convertDates'

export const getActionActivity = async(req, res) => {
    console.log(`GET '/getactionactivity/${req.params.idBoard}' 🤠 ${Date()}`)

    const idBoard = req.params.idBoard
    let findActions = await Actions.find({ "data.board.id": idBoard }).sort({date: -1})  //now to ago
    let i = 0
    let activity = []

    let d = new Date() 
    let cond2Date = new Date() 
    let cond3Date = new Date() 
    let cond3_1Date = new Date()
    let cond3_2Date = new Date()
    let cond4Date = new Date()

    let hour = (d.getHours())
    let minute = (d.getMinutes())
    const now = convertDates(d)
    d.setDate(d.getDate() -90)
    cond2Date.setDate(cond2Date.getDate()-7)
    cond3Date.setDate(cond3Date.getDate()-30)
    cond3_1Date.setDate(cond3Date.getDate()-14)
    cond3_2Date.setDate(cond3Date.getDate()-21)
    cond4Date.setDate(cond4Date.getDate()-60)
    let timeago
    while(findActions[i].date >= d){
        let dayAction = (findActions[i].date.getDay())
        let hourAction = (findActions[i].date.getHours())
        let minuteAction = (findActions[i].date.getMinutes())
        let dayCond = (cond2Date.getDay())
        
        if(findActions[i].dateString == now){
            let calTime = (hour*60+minute) - (hourAction*60+minuteAction)
            if(calTime>=60) 
                timeago = Math.floor(calTime/60) + " hour ago"
            else
                timeago = calTime + " minute ago"
        }
        else if(cond2Date < findActions[i].date){
            if(cond2Date.getDate()  == findActions[i].date.getDate())
                timeago = "6 day ago"
            else if(dayAction<dayCond)
                timeago = dayCond-dayAction + " day ago"
            else
                timeago = (7-dayAction+dayCond) + " day ago"
        }
        else if(cond3Date < findActions[i].date){
            if(cond3_1Date<findActions[i].date)
                timeago = "1 week ago"
            else if(cond3_2Date<findActions[i].date)
                timeago = "2 week ago"
            else
                timeago = "3 week ago"
        }
        else{
            if(cond4Date<findActions[i].date)
                timeago = "1 month ago"
            else
                timeago = "2 month ago"
        }
        //toObject make use object from query mongo
        activity.push(findActions[i].toObject())
        activity[i].timeago = timeago
        i++
    }
    res.json(activity)
}

