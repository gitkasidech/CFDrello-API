import Trello from 'node-trello'
import {Labels} from '../models/labels'

export const checkCreateLabels = async (board,key,token) => {
    let t = new Trello(key,token)
    t.get("/1/boards/" + board + "/labels", async (err, data) => {
        if (err) throw err
        const len = data.length
        for (let i = 0; i < len; i++){
            const labels = await Labels.findOne({id:(data[i]).id})
            const callLabels = await createnewLabels(Labels,labels,data[i])
        }  
    })   
}

export const createnewLabels = async(Labels,labels,data) => {
    if (!labels) {
        const newlabels = await Labels.create({
            id: data.id,
            name: data.name,
            color: data.color,
            uses: data.uses,
            idBoard: data.idBoard
        })
        return newlabels
    }
    else if (labels.name != data.name || labels.color != data.color || labels.uses != data.uses) {
        const newlabels = await Labels.update({id: data.id},{$set:{
            name: data.name,
            color: data.color,
            uses: data.uses
        }})
        return newlabels
    } 
    else
        return false
}



