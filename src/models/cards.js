import mongoose from 'mongoose'
import { dbCFDrello } from './index' 

const CardsSchema = mongoose.Schema({
    id: String,
    name: String,
    idBoard: String,
    idList: String,
    idMembers: Array,
    idLabels: Array
});

export const Cards = mongoose.model('Cards', CardsSchema);


