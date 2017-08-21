// const Trello = require("node-trello");
// const t = new Trello("0c0448fe0859bc978758a937fea22dc5", "e5038d4cb3e3c43f2d9c5a340cc9728354cd7c7184eaecb02a8bdc38b7f6c96d");
// let idBoards = "583fec9f1b0bf4ea049ecebd"
// t.get("/1/boards/"+idBoards+"/lists",(err, data) =>{
//   if (err) throw err;
//   console.log(data.length);
// });
import Trello from 'node-trello'
import {Lists} from '../models/lists'

export const checkCreateLists = async(app_id, token, idBoard) => {
    let t = new Trello(app_id, token)
    t.get("/1/boards/"+idBoard+"/lists", async(err, data) => {
        if (err) throw err
        const len = data.length
        for(let i=0;i<len;i++){
            const lists = await Lists.findOne({id: data[i].id});
            console.log(data[i].id)
            console.log(lists)
            const callcreate = await createnewLists(lists, data[i])
            if (callcreate)
                console.log("create new lists complete");
            else
                console.log("have a lists already!!");
        } 
    })
}

export const createnewLists = async(lists, data) => {
    if (!lists) {
        const newlist = await Lists.create({
            id: data.id,
            name: data.name,
            idBoard: data.idBoard
        })
        return true
    } else
        return false
}