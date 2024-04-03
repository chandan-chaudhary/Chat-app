import React, {useState} from "react";
import {Link} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";

export default function Login(){
   let showPass =false;

    const handleShowPassword = (e)=>{
        e.preventDefault();
       showPass = true;
        console.log('hey', showPass);
        showPass =false;
    };
    // console.log(show);
    return(
        <div className={'flex flex-col justify-center h-screen bg-slate-300 items-center '}>
            <h1 className={'p-4 font-bold text-2xl underline'}>LOGIN</h1>
            <div className={'flex flex-col justify-center bg-slate-400 p-20 rounded-lg items-center'}>
                <form className={'flex flex-col space-y-1 mb-3'}>
                    <label className={'font-bold'} htmlFor={'usernameText'}>Username</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'text'} name={'usernameText'}
                           placeholder={'username'}/>
                    <label className={'font-bold '} htmlFor={'passwordText'}>Password</label>
                    <input className={' px-1 italic rounded-sm bg-slate-200'} type={`${showPass ? 'text' : 'password'}`}
                           name={'passwordText'} placeholder={'password'} />
                    <div onClick={handleShowPassword} className={'relative left-48 bottom-7 hover:cursor-pointer'}>
                        <i className="fa-solid fa-eye"></i>
                    </div>
                    <button className={'flex justify-center font-bold bg-slate-300 m-8 rounded-full'}>Login</button>
                </form>
                <Link to={'/register'}>
                <span className={'text-xl underline italic hover:cursor-pointer'}>sign up</span>
                </Link>
            </div>
        </div>
    )
}