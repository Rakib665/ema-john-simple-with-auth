import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            < img src={logo} alt="" />
            <div className='order'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/order-review">Inventory</Link>
                <Link to="/manage-history">Manage History</Link>
                {
                    user 
                    ? <button onClick={handleSignOut}>Sign Out</button>
                    : <Link to='/login'>Login</Link>

                }
                <Link to='/signup'>Signup</Link>
            </div>
        </nav>
    );
};

export default Header;