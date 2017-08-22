import Trello from 'node-trello'
import {Lists} from '../models/lists'

export const checkCreateLists = async(app_id, token, idBoard) => {
    let t = new Trello(app_id, token)
    t.get("/1/boards/"+idBoard+"/lists", async(err, data) => {
        if (err) throw err
        const len = data.length
        for(let i=0;i<len;i++){
            const lists = await Lists.findOne({id: data[i].id});
            const callcreate = await createnewLists(Lists,lists, data[i])
            if (callcreate)
                console.log("create new lists complete");
            else
                console.log("have a lists already!!");
        } 
    })
}

export const createnewLists = async(Lists,lists, data) => {
    if (!lists) {
        const newlist = await Lists.create({
            id: data.id,
            name: data.name,
            idBoard: data.idBoard
        })
        return newlist
    }
    else if (lists.name != data.name) {
        const newlist = await Lists.update({id: data.id},{$set:{
            name: data.name
        }})
        return newlist
    } 
    else
        return false
}