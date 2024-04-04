

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


// OWN ROUTES
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes')
const messageRoute = require('./routes/messageRoutes');


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

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

module.exports= app;