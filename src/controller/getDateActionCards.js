import {Cards} from '../models/cards'
import {Actions} from '../models/actions'

export const dayCountCards = async (req, res, next) => {
    console.log(`GET '/actioncards/${req.params.idDashboard}/${req.params.start}/${req.params.end}' 🤠 ${Date()}`)
    console.log(req.params.start)
    console.log(req.params.end)

    const data = {
        idDashboard: req.params.idDashboard,
        start: req.params.start,
        end: req.params.end
    }
    const getActionCards = await countData(data)
}

export const countData = (data) => {
    console.log(data.idDashboard)
    console.log(data.start)
    console.log(data.end)
    return data
}