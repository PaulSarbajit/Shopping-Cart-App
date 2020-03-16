import React from 'react';

import './ShoppingItem.css'

const shoppingItem = props => {
    return (
        <div className="ShoppingItem">
            <div className="image">
                <img src={props.item.image} alt="Smiley face" />
            </div>
            <div className="content">
                <h4>{props.item.brandName}</h4>
                <p>{props.item.productName}</p>
                <p>{props.item.quantity}</p>
                <p>MRP {props.item.price}</p>
                <p><strong>Rs {props.item.mrf}</strong></p>
                <div className="buttons">
                    <button className="addToCartBtn" onClick={props.clicked}>ADD TO CART</button>
                    <div className="quantityButtons">
                        <button onClick={props.addItem}>+</button>
                        <span>{props.item.qty}</span>
                        <button onClick={props.removeItem}>-</button>                    
                    </div>
                </div>
            </div>
            
            <div className="clearFloat"></div>
        </div>
    );
};

export default shoppingItem;