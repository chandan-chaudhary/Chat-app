import React, { useState } from "react";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { processStart, processSuccess, processError } from "../redux/userSlice";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const dispatch = useDispatch();

     const handleSignup= async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            dispatch(processStart());
            if(!inputs.name || !inputs.email || !inputs.password || !inputs.confirmPassword){
                return toast.error('Missing Inputs');
            }
            if(inputs.password !== inputs.confirmPassword){
                return toast.error(`Password didn't match`);
            }
            console.log(inputs.password, inputs.confirmPassword);
            const register = await axios.post('http://127.0.0.1:5500/api/auth/register',{
                name:inputs.name, email:inputs.email, password: inputs.password, confirmPassword:inputs.confirmPassword,
            });
            dispatch(processSuccess(register.data))
            toast.success('register success')
            // console.log(register.data);
            register.data && window.location.replace('/')

        }catch(err){
            console.log(err);
            toast.error(err.response.data.error);
            dispatch(processError(err.response.data.error));
        } finally {
            setLoading(false);
        }
     };



    return (
        <div className={'flex flex-col justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-400 items-center text-black'}>
            <h1 className={'p-4 font-bold text-2xl underline'}>SIGN UP</h1>
            <div className={'flex flex-col justify-center  bg-fuchsia-300 p-20 rounded-lg items-center'}>
                <form className={'flex flex-col space-y-1'} onSubmit={handleSignup}>
                    <label className={'font-bold'} htmlFor={'name'}>Name</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'text'} name={'name'}
                           placeholder={'Your Name'} value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}/>
                    <label className={'font-bold'} htmlFor={'usernameText'}>Email</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'email'} name={'email'}
                     placeholder={'Your Email'} value={inputs.email} onChange={(e)=> setInputs({...inputs, email:e.target.value})}/>
                    <label className={'font-bold '} htmlFor={'passwordText'}>Password</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'password'}
                           name={'passwordText'} placeholder={'password'} value={inputs.password} onChange={(e)=> setInputs({...inputs, password:e.target.value})}/>
                    <label className={'font-bold '} htmlFor={'confirmPasswordText'}>Confirm Password</label>
                    <input className={'px-1  pl-2 italic rounded-sm bg-slate-200'} type={'password'}
                           name={'confirmPasswordText'} placeholder={'password'} value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}/>
                    <button className={' font-bold bg-slate-300 m-5 mt-5 rounded-full'} disabled={loading}>
                        {loading ? <span className="loading loading-dots loading-lg"></span> : "Register" }</button>
                </form>
                <span className={'underline p-4 hover:cursor-pointer '}>forgot password?</span>
                <Link to={'/login'}>
                    <span className={'underline italic '}>sign in</span>
                </Link>
            </div>
        </div>
    )
}

// setName(e.target.value)