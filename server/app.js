

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// const {app} = require('./socket');


const {Server} = require('socket.io');
const http = require('http');
// const cors = require('cors');
// const express = require('express');
// OWN ROUTES
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes')
const messageRoute = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

const io = new Server(server, {
    cors: true,
});
const socketUserMap = {};
// get messsage receiverId
const getReceiverSocketId = (receiverId) =>{
    return socketUserMap[receiverId];
};

io.on('connection',(socket)=>{
    console.log('user connected', socket.id);
    const userId = socket.handshake.query.userId;
    if(userId != 'undefined'){
    socketUserMap[userId] = socket.id;
    }
    console.log(socketUserMap, userId);
    io.emit('getOnlineUsers', Object.keys(socketUserMap));

    socket.on('disconnect',()=>{
        console.log('user disconnected', socket.id);
        delete socketUserMap[userId];
        io.emit('getOnlineUsers', Object.keys(socketUserMap));
    });
});

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "http://localhost:3000"});
    next();
  }) 
app.use((req, res, next)=>{
    console.log(new Date().toLocaleDateString());
    console.log("fetched url: ",req.url);
    next();
});

// ROUTES
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);

// CHECK FOR WORNG URL
app.all('*', (req, res, next) => {
    try {
       return res.status(500).json(`Can't fetch ${req.originalUrl}`);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
    next();
});

module.exports=getReceiverSocketId;
module.exports=io;
module.exports=app;
module.exports= server;

