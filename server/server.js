

const server = require('./app');
// const http = require('http');
// 
const mongoose = require('mongoose');
const  dotenv =require('dotenv');
dotenv.config({path:'./.env'})

const database = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
mongoose.connect(database).then(()=>{
    console.log('database connected');
});

const port = process.env.PORT || 3000;
server.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});