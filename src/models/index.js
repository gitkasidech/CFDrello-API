import mongoose from 'mongoose'
import Promise from 'bluebird'
mongoose.Promise = global.Promise;

export const dbCFDrello  = mongoose.connect('mongodb://localhost:27017/CFDrello', async (err) => {
    if (err) {
        console.log(err);
    }
}); 