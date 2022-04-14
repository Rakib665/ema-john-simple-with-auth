import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            < img src={logo} alt="" />
            <div className='order'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-history">Manage History</Link>
            </div>
        </nav>
    );
};

export default Header;