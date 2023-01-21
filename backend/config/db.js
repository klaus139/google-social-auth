const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connect = () => {
    mongoose.set('strictQuery', false);
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log('connected to mongoDB'.cyan.underline);
    } catch(error){
        throw error;
    }
    mongoose.connection.on('disconnected',()=>{
        console.log('mongodb disconnected');
    })
};

