import React, {useState} from "react";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { processStart, processSuccess, processError } from "../redux/userSlice";


export default function Login(){
    // SET INPUTS VALUE
    const [loading, setLoading] = useState(false);
   const [showPass, setShowPass] = useState(false);
   const dispatch = useDispatch();
   const [inputs, setInputs]= useState({
    email:'',
    password:'',
   });

//    TOGGLE PASSWORD
    const handleShowPassword = ()=>{
        if(showPass){
            setShowPass(false);
        }else{
            setShowPass(true);
        }
    };

    const handleLogin = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            if(!inputs.email || !inputs.password){
                toast.error('Credentials missing');
            }
            dispatch(processStart());
            const loginUser = await axios.post('http://127.0.0.1:5500/api/auth/login',{
                email:inputs.email, password:inputs.password
            });
            // console.log('login',loginUser);
            dispatch(processSuccess(loginUser.data));
            toast.success(loginUser.data.user.name +' logged');
        }catch(err){
            console.log(err);
            toast.error(err.response.data.error);
            dispatch(processError(err.response.data.error));
        } finally {
            setLoading(false);
        }
    }
    // console.log(show);
    return(
        <div className={'flex flex-col justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-400 items-center text-black '}>
            <h1 className={'p-4 font-bold text-2xl underline'}>LOGIN</h1>
            <div className={'flex flex-col justify-center bg-fuchsia-300 p-20 rounded-lg items-center'}>
                <form className={'flex flex-col space-y-1 mb-3'} onSubmit={handleLogin}>
                    <label className={'font-bold'} htmlFor={'usernameText'}>Email</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'email'} name={'usernameText'}
                           placeholder={'username'} value={inputs.email} onChange={(e)=> setInputs({...inputs, email: e.target.value})}/>
                    <label className={'font-bold '} htmlFor={'passwordText'}>Password</label>
                    <input className={' px-1 italic rounded-sm bg-slate-200'} type={`${showPass ? 'text' : 'password'}`}
                           name={'passwordText'} placeholder={'password'}  value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})} />
                    <div onClick={handleShowPassword} className={'relative left-48 bottom-7 hover:cursor-pointer'}>
                        <i className="fa-solid fa-eye"></i>
                    </div>
                    <button className={'flex justify-center font-bold bg-slate-300 m-8 rounded-full'} disabled={loading}>
                    {loading ? <span className="loading loading-dots loading-md"></span> : "Login" }</button>
                </form>
                <Link to={'/register'}>
                <span className={'text-xl underline italic hover:cursor-pointer'}>sign up</span>
                </Link>
            </div>
        </div>
    )
}