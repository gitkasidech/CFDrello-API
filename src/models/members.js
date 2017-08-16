import mongoose from 'mongoose'
import { dbCFDrello } from './dbCFDrello'

const MembersSchema = mongoose.Schema({
    id: String,
    username: String,
    fullName: String,
    token: String,
    idBoards: Array
});

export const Members = mongoose.model('Members', MembersSchema);


