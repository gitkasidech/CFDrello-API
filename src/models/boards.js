import mongoose from 'mongoose'
import { dbCFDrello } from './dbCFDrello'

const BoardsSchema = mongoose.Schema({
    id: String,
    name: String
});

export const Boards = mongoose.model('Boards', BoardsSchema);


