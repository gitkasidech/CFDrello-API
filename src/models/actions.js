import mongoose from 'mongoose'
import { dbCFDrello } from './index'

const ActionsSchema = mongoose.Schema({
    id: String,
    idMemberCreator: String,
    data: Object,
    type: String,
    date: Date
});

export const Actions = mongoose.model('Actions', ActionsSchema);


