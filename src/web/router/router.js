import { loginAuthen } from '../../controller/login'
import { callback } from '../../controller/login'
import { findBoards } from '../../controller/getBoards'
import { findLists } from '../../controller/getLists'
import { saveData } from '../../controller/dashboards'
import { findDashboards } from '../../controller/getAllDashboards'
import { saveLCAD } from '../../controller/createLCAD'
import { dayCountCards } from '../../controller/getDateActionCards'
import { getActionActivity } from '../../controller/getActionActivity'

export const setRoute = async (app) => {
    app.get('/login',loginAuthen)
    app.get('/callback', callback)
    app.get('/alldashboards/:idMember',findDashboards)
    app.get('/boards/:idMember',findBoards)
    app.get('/lists/:idBoard',findLists)
    app.post('/dashboards',saveData)
    app.post('/createlcad',saveLCAD)
    app.get('/dateactioncards/:idDashboard/:start/:end',dayCountCards)
    app.get('/getactionactivity/:idBoard',getActionActivity)
}
