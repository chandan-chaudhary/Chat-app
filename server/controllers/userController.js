
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// create Token
const createToken = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const cookieOption = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIES_EXPIRE_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') cookieOption.secure = true;

    res.cookie('jwt', token, cookieOption);
    return token;
};

exports.registerUser = async(req, res)=> {
    try {
        console.log(req.body.name, req.body.email, req.body.password);
        const password = await bcrypt.hash(req.body.password, 12);

        const user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
        });
        const token = createToken(user._id, res);
        res.status(201).json({user, token: token});
    } catch (err) {
        res.status(404).json({message: err.message});
    };
};


exports.login = async(req, res)=>{
    try{
        const {email, password } = req.body;
        if(!email || !password) throw new Error('Credential missings');
        const user = await User.findOne({email});
        // const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!user || ! await bcrypt.compare(password, user.password)) throw new Error('Incorrect Credentials');

        // create Token
        const token = createToken(user._id, res);
        res.status(200).json({user, token: token});
    } catch (err){
        res.status(401).json({message: err.message});
    };
};