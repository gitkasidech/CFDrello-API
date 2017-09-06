import mongoose from 'mongoose'
import { dbCFDrello } from './index'

const HourActionCardsSchema = mongoose.Schema({
    dateString: String,
    timeHour: Number,
    countBack: Number,
    countInpr: Number,
    countComp: Number,
    idDashboard: String
});

export const HourActionCards = mongoose.model('HourActionCards', HourActionCardsSchema);


