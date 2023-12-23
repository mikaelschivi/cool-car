const mongoose = require('mongoose');
const dotenv = require('dotenv').config('.env')

const CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports = async() => {
    try{
        console.log('connecting to database...');
        await mongoose.connect( CONNECTION_STRING );
        console.log('database connected :)');
        
    } catch (err){
        console.log(err);
        process.exit(1);
    }
};