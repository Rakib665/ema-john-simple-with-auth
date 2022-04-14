import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props)
    const {product,  handleRemoveProduct} = props
    const { name, shipping, price, img ,quantity} = product
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <div className="review-text">
                    <h2>
                        {name.length > 20 ? name.slice(0,20) + '...' : name} </h2>
                    <p>Price: {price}$</p>
                    <p>Quantity: {quantity}</p>
                    <p><small>Shipping: {shipping}</small></p>

                </div>
                <div className='review-delete-btn' >
                    <button onClick={()=>{handleRemoveProduct(product)}} className="delete-btn">
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;