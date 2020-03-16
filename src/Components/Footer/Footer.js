import React from "react";

import './Footer.css';

const searchInput = props => {
    return(
        <div className="Footer">
           <div className="details">
               <p>QTY {props.show ? props.qty : 0}</p>
               <p>Total {props.show ? props.total : 0}</p>
           </div>
           <div className="checkoutButton">
                <button onClick={props.checkoutClicked} disabled={props.disabled}>CHECKOUT</button>
           </div>
        </div>
    );
};

export default searchInput;