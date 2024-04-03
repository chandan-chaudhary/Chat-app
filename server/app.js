

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


// OWN ROUTES
const userRouter = require('./routes/userRoutes')

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

app.use('/api/user', userRouter);

app.all('*', (req, res, next) => {
    try {
        throw new Error(`Can't fetch ${req.originalUrl}`);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
    next();
});

module.exports= app;