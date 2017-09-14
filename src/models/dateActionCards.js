import mongoose from 'mongoose'
import { dbCFDrello } from './index'

const DateActionCardsSchema = mongoose.Schema({
    date: Date,
    dateString: String,
    countBack: Number,
    countInpr: Number,
    countComp: Number,
    idDashboard: String
});

export const DateActionCards = mongoose.model('DateActionCards', DateActionCardsSchema);


