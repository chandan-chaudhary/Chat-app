

const mongoose = require( 'mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Incorrect email'],
    },
    password:{
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: '',
    }
},{
    timestamps: true,
});

// userSchema.pre('save', async(next)=>{
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;