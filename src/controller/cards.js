import Trello from 'node-trello'
import request from 'request'
import Promise from 'bluebird'
import {Cards} from '../models/cards'

export const checkCreateCards = async(board,key,token) => {
    let t = new Trello(key,token)
    t.get("/1/boards/" + board + "/cards/all", async (err, data) => {
        if (err) throw err
        const len = data.length
        for (let i = 0; i < len; i++){
            const cards = await Cards.findOne({id:(data[i]).id})
            const callCards = await createnewCards(Cards,cards,data[i])
        }  
    })
    // console.log(sinceDate)
    // console.log(beforeDate)
    // return new Promise((resolve, reject) => {
    //     request({
    //         uri: 'https://api.trello.com/1/board/'+board+'/cards/?fields=id,name,idBoard,idList,idMembers,idLabels&since='+sinceDate+'&before='+beforeDate+'&limit=1000&key='+key+'&token='+token,
    //         method: 'GET'
    //     }, (err, response, body) =>{
    //         if (err) reject(JSON.stringify(err))
    //         console.log(body)
    //         resolve(body)
    //     })
    // }).then(async (data) => {
    //         data = JSON.parse(data)
    //         const len = data.length
    //         for (let i = 0; i < len; i++) {
    //             const cards = await Cards.findOne({ id: (data[i]).id })
    //             const callCards = await createnewCards(Cards,cards, data[i])
    //         }
    // })   
}

export const createnewCards = async(Cards,cards,data) => {
    if (!cards) {
        const newcards = await Cards.create({
            id: data.id,
            name: data.name,
            idBoard: data.idBoard,
            idList: data.idList,
            idMembers: data.idMembers,
            idLabels: data.idLabels
        })
        return newcards
    }
    else if (cards.name != data.name || cards.idList != data.idList || JSON.stringify(cards.idMembers) != JSON.stringify(data.idMembers) || JSON.stringify(cards.idLabels) != JSON.stringify(data.idLabels)) {
        const newcards = await Cards.update({id: data.id},{$set:{
            name: data.name,
            idList: data.idList,
            idMembers: data.idMembers,
            idLabels: data.idLabels
        }})
        return newcards
    } 
    else
        return false
}