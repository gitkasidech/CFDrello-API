import mongoose from 'mongoose'
import { dbCFDrello } from './dbCFDrello'

const LabelsSchema = mongoose.Schema({
    id: String,
    name: String,
    color: String,
    uses: Number,
    idBoard: String
});

export const Labels = mongoose.model('Labels', LabelsSchema);


