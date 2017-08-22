import mongoose from 'mongoose'
import { dbCFDrello } from './index'

const BoardsSchema = mongoose.Schema({
    id: String,
    name: String,
    labelNames: Object
});

export const Boards = mongoose.model('Boards', BoardsSchema);


