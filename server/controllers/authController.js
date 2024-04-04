
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// CREATE TOKEN
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

    if (process.env.NODE_ENV !== 'development') cookieOption.secure = true;

    res.cookie('jwt', token, cookieOption);
    return token;
};

// SIGN UP
exports.registerUser = async(req, res)=> {
    try {
        const {name, email, password,confirmPassword} =req.body;
        // confirm password
        if(password !== confirmPassword) return res.status(404).json({error:`Password didn't match!`});
        // check user already exist
        const userExist = await User.findOne({email});
        if(userExist) return res.status(404).json({error:'User already exist!'});
        // hash password
        // const salt = await bcrypt.getSalt();
        const hashPassword = await bcrypt.hash(password, 10);
        // create user
        const user= await User.create({
            name,
            email,
            password: hashPassword,
        });
        // create token
        const token = createToken(user._id, res);
        // send response
        res.status(201).json({user, token: token});
    } catch (err) {
        res.status(404).json({error: err.message});
    };
};

// LOGIN
exports.login = async(req, res)=>{
    try{
        const {email, password } = req.body;
        //  missing credential check
        if(!email || !password) return res.status(404).json({error:'Credentials missing'});
        // check if user is present
        const user = await User.findOne({email});
        // compare password and handle user along
        if(!user || ! await bcrypt.compare(password, user.password)) return res.status(404).json({error:'Incorrect credential'});

        // create Token
        const token = createToken(user._id, res);
        // send response
        res.status(200).json({user, token: token});
    } catch (err){
        res.status(404).json({error: err.message});
    };
};

// LOGOUT
exports.logout = async (req, res)=>{
    try{
        res.cookie('jwt', '',{
            expires: 0,
        });
        res.status(200).json({message:'Logged out successfully!'});
    }catch (err){
        res.status(401).json({error: err.message});
    };
};

