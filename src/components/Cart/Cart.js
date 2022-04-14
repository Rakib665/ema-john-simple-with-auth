import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
     console.log(props.children)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total +product.price * product.quantity
        shipping = shipping + product.shipping 
        // console.log(product)
    }
    
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
               <p>Selected Lists:{quantity}</p>
               <p>Total Price: ${total}</p>
               <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(3)}</p>
                <h2>Grand Total: ${grandTotal}</h2>
                {props.children}
        </div>
    );
};

export default Cart;