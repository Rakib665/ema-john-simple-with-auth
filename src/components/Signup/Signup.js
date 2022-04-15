import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Signup = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const [error,setError] = useState('')

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleBlurEmail = event =>{
        setEmail(event.target.value)
    }
    const handleBlurPassword = event =>{
        setPassword(event.target.value)
    }
    const handleBlurConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError('your two password did not match')
            return;
        }
        if(password.length <6 ){
            setError('Password must be 6 character or longer ')
            return;
        }
        createUserWithEmailAndPassword(email,password,confirmPassword)
        
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Signup</h2>


        <form onSubmit={handleFormSubmit}>
        <div className='input-group'>
             <label className='input-label' htmlFor="email">Email</label>
             <input onBlur={handleBlurEmail} type="email" name="email" id="" required/>
         </div>
         <div className='input-group'>
             <label className='input-label' htmlFor="password">Password</label>
             <input onBlur={handleBlurPassword} type="password" name="password" id="" required />
         </div>
         <div className='input-group'>
             <label className='input-label' htmlFor="confirm-password">Confirm password</label>
             <input onBlur={handleBlurConfirmPassword} type="password" name="confirm-password" id="" required />
         </div>
         <input className='form-submit' type="submit" value="Signup" />
        </form>
        
        <p style={{'color': 'red'}} className='error'>{error}</p>
        <p>
               Already have an account /<Link className='new-user' to='/login'>Login</Link>
           </p>
        <button className='google-btn'> <FontAwesomeIcon icon={faCode} /> Continue With Google</button>

        </div>
     </div>
    );
};

export default Signup;