import mongoose from'mongoose';


export const dbConnection = mongoose.connect('mongodb://localhost:27017/Assignment8DB')
    .then(() => console.log('Connected to mongoose')).catch((err) => console.error('Could not connect to mongoose', err));
