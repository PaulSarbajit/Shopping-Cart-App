import React from 'react';

import './OrderSummary.css';

const orderSummary = props => {
    return (
        <div className="OrderSummary">
            <h3>ORDER SUMMARY</h3>
            <p><strong>Total Price: </strong> 
            Rs.<span style={{color: 'red', fontWeight: 'bold'}}>{props.totalPrice}</span></p>
            <button onClick={props.clicked}>COMPLETE BUY!</button>
        </div>
    );
};

export default orderSummary;