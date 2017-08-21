import {Lists} from '../models/lists'

export const findLists = async (req, res, next) => {
    const idBoard = req.params.idBoard
    const lists = await Lists.find({ idBoard: idBoard },{id:1,name:1,_id:0}) //1show 0don't show
    res.json(lists)
}