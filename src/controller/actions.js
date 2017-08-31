import Trello from 'node-trello'
import {Actions} from '../models/actions'

export const checkCreateActions = async(board,key,token) => {
    let t = new Trello(key,token)
    t.get("/1/boards/" + board + "/actions", async (err, data) => {
        if (err) throw err
        const len = data.length
        for (let i = 0; i < len; i++){
            const actions = await Actions.findOne({id:(data[i]).id})
            const callActions = await createnewActions(Actions,actions,data[i])
            if (callActions) 
                console.log("create or update new action complete")
            else 
                console.log("have a action already!!")
        }  
    })   
}

export const createnewActions = async(Actions,actions,data) => {
    if (!actions) {
        const newactions = await Actions.create({
            id: data.id,
            idMemberCreator: data.idMemberCreator,
            data: data.data,
            type: data.type,
            date: data.date
        })
        return newactions
    }
    else if (actions.idMemberCreator != data.idMemberCreator || JSON.stringify(actions.data) != JSON.stringify(data.data) || actions.type != data.type || actions.date != data.date ) {
        const newactions = await Actions.update({id: data.id},{$set:{
            idMemberCreator: data.idMemberCreator,
            data: data.data,
            type: data.type,
            date: data.date
        }})
        return newactions
    } 
    else
        return false
}