const User = require('../models/userModel');


exports.getAllUser = async(req, res)=>{
    try{
        const loggedUser = req.user._id;
        // GET ALL USER
        const allUsers = await User.find({_id: {$ne: loggedUser }}).select('-password');

        if(!allUsers) res.status(200).json('no user found')
        res.status(200).json(allUsers);
    }catch (err) {
        res.status(404).json({error: err.message});
    }
};