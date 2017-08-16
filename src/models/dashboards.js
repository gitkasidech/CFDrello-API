import mongoose from 'mongoose'
import { dbCFDrello } from './dbCFDrello'

const DashboardsSchema = mongoose.Schema({
    name: String,
    idBoard: String,
    listComp: Array,
    colorComp: String,
    listInpr: Array,
    colorInpr: String,
    listBack: Array,
    colorBack: String,
    idMember: String
});

export const Dashboards = mongoose.model('Dashboards', DashboardsSchema);


