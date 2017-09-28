import Trello from 'node-trello'
import request from 'request'
import {Actions} from '../models/actions'
import Promise from 'bluebird'
import {convertDates} from './convertDates'

export const checkCreateActions = async (board,key,token,sinceDate,beforeDate) => {
    return new Promise((resolve, reject) => {
        request({
            uri: 'https://api.trello.com/1/board/'+board+'/actions/?filter=createCard,moveCardToBoard,commentCard,updateCard:idList,updateCard:closed&since='+sinceDate+'&before='+beforeDate+'&limit=1000&key='+key+'&token='+token,
            method: 'GET'
        }, (err, response, body) =>{
            if (err) reject(JSON.stringify(err))
            resolve(body)
        })
    }).then(async (data) => {
            data = JSON.parse(data)
            const len = data.length
            for (let i = 0; i < len; i++) {
                const actions = await Actions.findOne({ id: (data[i]).id })
                const callActions = await createnewActions(Actions, actions, data[i])
            }
    })
}

export const getDateCreateBoard = async (board,key,token) => {
    return new Promise((resolve, reject) => {
        request({
            uri: 'https://api.trello.com/1/board/'+board+'/actions/?filter=createBoard&key='+key+'&token='+token,
            method: 'GET'
        }, (err, response, body) =>{
            if (err) reject(JSON.stringify(err))
            body = JSON.parse(body)
            resolve(body[0].date)
        })
    })
}

export const createnewActions = async (Actions,actions,data) => {
    if (!actions) {
        let d = new Date(data.date)
        const ymd = await convertDates(d)
        const newactions = await Actions.create({
            id: data.id,
            idMemberCreator: data.idMemberCreator,
            memberCreator: data.memberCreator,
            data: data.data,
            type: data.type,
            date: data.date,
            dateString: ymd
        })
        return newactions
    }
    else if (actions.idMemberCreator != data.idMemberCreator || JSON.stringify(actions.data) != JSON.stringify(data.data) || actions.type != data.type || actions.date != data.date || JSON.stringify(actions.memberCreator) != JSON.stringify(data.memberCreator)) {
        let d = new Date(data.date)
        const ymd = await convertDates(d)
        const newactions = await Actions.update({id: data.id},{$set:{
            idMemberCreator: data.idMemberCreator,
            memberCreator: data.memberCreator,
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