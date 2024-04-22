
// const {Server} = require('socket.io');
// // const app = require('./app');
// const http = require('http');
// const cors = require('cors');
// const express = require('express');


// const app = express();
// app.use(cors());
// const server = http.createServer(app);

// const io = new Server(server,{
//     cors:true,
// });

// const socketUserMap = {};

// io.on('connection',(socket)=>{
//     console.log('user connected', socket.id);
//     const userId = socket.handshake.query.userId;
//     if(userId !== undefined){
//     socketUserMap[userId] = socket.id;
//     }
//     io.emit('getOnlineUsers', Object.keys(socketUserMap));

//     io.on('disconnect',()=>{
//         console.log('user disconnected', socket.id);
//         delete socketUserMap[userId];
//         io.emit('getOnlineUsers', Object.keys(socketUserMap));
//     });
// });

// module.exports = {app, server, io};
// // module.exports =server;
// // module.exports =io;

