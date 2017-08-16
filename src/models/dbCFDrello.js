import mongoose from 'mongoose'
export const dbCFDrello  = mongoose.connect('mongodb://localhost:27017/CFDrello', async (err) => {
    if (err) {
        console.log(err);
    }
}); 