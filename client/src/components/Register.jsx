import React from "react";
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className={'flex flex-col justify-center h-screen bg-slate-300 items-center '}>
            <h1 className={'p-4 font-bold text-2xl underline'}>SIGN UP</h1>
            <div className={'flex flex-col justify-center bg-slate-400 p-20 rounded-lg items-center'}>
                <form className={'flex flex-col space-y-1'}>
                    <label className={'font-bold'} htmlFor={'name'}>Name</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'text'} name={'usernameText'}
                           placeholder={'name'}/>
                    {/*<label className={'font-bold'} htmlFor={'usernameText'}>Username</label>*/}
                    {/*<input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'text'} name={'usernameText'}*/}
                    {/*       placeholder={'username'}/>*/}
                    <label className={'font-bold '} htmlFor={'passwordText'}>Password</label>
                    <input className={'px-1 pl-2 italic rounded-sm bg-slate-200'} type={'password'}
                           name={'passwordText'} placeholder={'password'}/>
                    <label className={'font-bold '} htmlFor={'confirmPasswordText'}>Confirm Password</label>
                    <input className={'px-1  pl-2 italic rounded-sm bg-slate-200'} type={'password'}
                           name={'confirmPasswordText'} placeholder={'password'}/>
                    <button className={' font-bold bg-slate-300 m-5 mt-5 rounded-full'}>Register</button>
                </form>
                <span className={'underline p-4 hover:cursor-pointer '}>forgot password?</span>
                <Link to={'/login'}>
                    <span className={'underline italic '}>sign in</span>
                </Link>
            </div>
        </div>
    )
}
