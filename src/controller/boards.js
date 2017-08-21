import Trello from 'node-trello'
import {Boards} from '../models/boards'
import { checkCreateLists } from './lists'

export const checkCreateBoard = async (inf) => {
    console.log(inf)
    const len = (inf.idBoards).length
    let t = new Trello(inf.app_id, inf.token)

    for (let i = 0; i < len; i++) {
        t.get("/1/boards/" + (inf.idBoards)[i], async (err, data) => {
            if (err) throw err
            const boards = await Boards.findOne({id:(inf.idBoards)[i]});
            const callcreate = await createnewBoards(boards,data)
            if (callcreate) 
                console.log("create new board complete");
            else 
                console.log("have a board already!!");
            const callLists = await checkCreateLists(inf.app_id, inf.token,(inf.idBoards)[i])
        })
    }
}

export const createnewBoards = async (boards,data) => {
    if(!boards){
        const newboard = await Boards.create({
            id: data.id,
            name: data.name,
            labelNames: data.labelNames
        })
        return true
    }
    else
        return false  
}