import mongoose from 'mongoose'
import Promise from 'bluebird'
import {mongo} from '../configs'
mongoose.Promise = global.Promise;

export const dbCFDrello  = mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`, async (err) => {
    if (err) {
        console.log(err);
    }
}); 