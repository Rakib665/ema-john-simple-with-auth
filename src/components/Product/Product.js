import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props
    const {name,img,seller,ratings,price}= product
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <h2 className='product-name'>{name}</h2>
         <p className='product-price'>Price: {price}$</p>
         <p className='product-manufacturer'>Manufacturer: {seller}</p>
         <p className='product-manufacturer'>Rating: {ratings}</p>
        </div>
        <button onClick={()=>{handleAddToCart(product)}} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;