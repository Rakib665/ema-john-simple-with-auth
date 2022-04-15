import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [signInWithEmailAndPassword,user,error,loading] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";


    const handleBlurOnEmail = event =>{
        setEmail(event.target.value)
    }

    const handleBlurOnPassword = event =>{
        setPassword(event.target.value)
    }
    if(user){
        navigate(from,{replace: true})
    }
    
    const handleLogin = event =>{
        event.preventDefault()
       
        signInWithEmailAndPassword(email,password)

    }

    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Login</h2>
           <form onSubmit={handleLogin}>
           <div className='input-group'>
                <label className='input-label' htmlFor="email">Email</label>
                <input onBlur={handleBlurOnEmail} type="email" name="email" id="" />
            </div>
            <div className='input-group'>
                <label className='input-label' htmlFor="password">Password</label>
                <input onBlur={handleBlurOnPassword} type="password" name="password" id="" />
            </div>
        
            <input className='form-submit' type="submit" value="Login" />
           </form>
           {
               loading && <p>loading...</p>
           }
           <p>{error.message}</p>
           <p>
               New to ema-john <Link className='new-user' to='/signup'>Create an account</Link>
           </p>
           <button className='google-btn'> <FontAwesomeIcon icon={faCode} /> Continue With Google</button>
           </div>
        </div>
    );
};

export default Login;