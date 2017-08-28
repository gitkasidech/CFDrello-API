import {Dashboards} from '../models/dashboards'

export const findDashboards = async (req, res) => {
    console.log(`GET '/dashboards/${req.params.idMember}' 🤠 ${Date()}`)
    const idMember = req.params.idMember
    const dashboards = await Dashboards.find({ idMember: idMember })
    res.json(dashboards)
}
