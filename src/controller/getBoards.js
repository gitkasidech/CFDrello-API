import {Boards} from '../models/boards'
import { Members } from '../models/members'

export const findBoards = async (req, res, next) => {
    console.log(`GET '/boards/${req.params.idMember}' 🤠 ${Date()}`)
    const idMember = req.params.idMember
    const user = await Members.findOne({ id: idMember })
    const idBoards = user.idBoards
    const len = idBoards.length
    let boards = []
    for (let i = 0; i < len; i++) {
        let data = await Boards.findOne({id: idBoards[i]},{id:1,name:1,_id:0}) //1show 0don't show
        boards.push(data)
    }
    res.json(boards)
}
