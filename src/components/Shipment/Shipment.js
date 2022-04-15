import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email,setEmail] = useState('')
    const [address, setAddress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const handleBlurName = event => {
        setName(event.target.value)
    }
   
    const handleBlurAddress = event => {
        setAddress(event.target.value)
    }
    const handleBlurPhoneNum = event => {
        setPhoneNum(event.target.value)
    }
   
    const handleFormSubmit = event => {
        event.preventDefault()
        const shipping = {name,email,address,phoneNum}
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Info</h2>
                <form onSubmit={handleFormSubmit} >
                    <div className='input-group'>
                        <label className='input-label' htmlFor="name">Your Name</label>
                        <input onBlur={handleBlurName} type="text" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="address">Address</label>
                        <input onBlur={handleBlurAddress} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label className='input-label' htmlFor="phone-num">Phone Number</label>
                        <input onBlur={handleBlurPhoneNum} type="text" name="phone-num" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>






        </div>);
};

export default Shipment;