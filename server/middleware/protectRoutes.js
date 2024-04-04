

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protectRoute = async (req, res, next)=>{
    try{
        // collect token
        const token = req.cookies.jwt || req.headers.Authorization;
        if(!token) return res.status(401).json({error:'Unauthorized- token expired'});

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        if(!decoded) return res.status(401).json({error:'Unauthorized- Invalid token'});

        //  find user with decoded id
        const loggedUser = await User.findById(decoded.id);
        if(!loggedUser) return res.status(401).json({error:'Unauthorized- no logged user'});
        //  add user in req.user
        req.user = loggedUser;
        // console.log(req.user);
        next();
    }catch (err){
        res.status(400).json({error: err.message});
    }
};


