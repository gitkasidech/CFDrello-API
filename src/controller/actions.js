import Trello from 'node-trello'
import {Actions} from '../models/actions'
import Promise from 'bluebird'
import {convertDates} from './convertDates'

export const checkCreateActions = async (board,key,token) => {
    let t = new Trello(key,token)  
    return new Promise((resolve, reject) => {
        t.get("/1/boards/" + board + "/actions/?limit=1000", (err, data) =>{
            if (err) reject(err)
            resolve(data)
        })
    }).then(async (data) => {
            const len = data.length
            for (let i = 0; i < len; i++) {
                const actions = await Actions.findOne({ id: (data[i]).id })
                const callActions = await createnewActions(Actions, actions, data[i])
                // if (callActions)
                //     console.log("create or update new action complete")
                // else
                //     console.log("have a action already!!")
            }
            return  data[len-1].date
    
    })
}

export const createnewActions = async (Actions,actions,data) => {
    if (!actions) {
        let d = new Date(data.date)
        const ymd = await convertDates(d)
        const newactions = await Actions.create({
            id: data.id,
            idMemberCreator: data.idMemberCreator,
            data: data.data,
            type: data.type,
            date: data.date,
            dateString: ymd
        })
        return newactions
    }
    else if (actions.idMemberCreator != data.idMemberCreator || JSON.stringify(actions.data) != JSON.stringify(data.data) || actions.type != data.type || actions.date != data.date ) {
        let d = new Date(data.date)
        const ymd = await convertDates(d)
        const newactions = await Actions.update({id: data.id},{$set:{
            idMemberCreator: data.idMemberCreator,
            data: data.data,
            type: data.type,
            date: data.date,
            dateString: ymd
        }})
        return newactions
    } 
    else
        return false
}