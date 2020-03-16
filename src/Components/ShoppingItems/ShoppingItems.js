import React, { Component } from "react";

import './ShoppingItems.css';
import ShoppingItem from './ShoppingItem/ShoppingItem';



class ShoppingItems extends Component {

    render(){

        let shoppingItems = Object.keys(this.props.shoppingItems)
            .map((item, i) => {
                return <ShoppingItem key={this.props.shoppingItems[item].brandName + i} 
                item={this.props.shoppingItems[item]}
                addItem={() => this.props.addIndItem(item)}
                removeItem={() => this.props.removeIndItem(item)}
                clicked={this.props.addCartClick} />;
            })

        return(
            <div className="ShoppingItems">
                {shoppingItems}
            </div>
        );
    };
};


export default ShoppingItems;