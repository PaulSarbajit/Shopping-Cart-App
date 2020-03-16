import React, { Component } from 'react';
import axios from 'axios';

import ShoppingItems from '../Components/ShoppingItems/ShoppingItems';
import Footer from '../Components/Footer/Footer';
import Modal from '../Components/UI/Modal/Modal';
import OrderSummary from '../Components/OrderSummary/OrderSummary';
import './ShoppingList.css';

class SearchFeed extends Component {

    state = {
        items: {},
        totalQty: 0,
        totalPrice: 0,
        showQty: 0,
        showPrice: 0,
        showDetails: false,
        showModal: false
    }

    componentDidMount(){
        axios.get('https://shopping-list-aa7d9.firebaseio.com/Items.json')
            .then(res => {
                this.setState({items: res.data});
                // console.log(this.state.items);
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate(){
        console.log(this.state.showQty)
    }

    addIndividualItemHandler = (item) => {

        const items = {
            ...this.state.items,
            [item]:{
                ...this.state.items[item],
                qty: this.state.items[item].qty + 1
            },
        };
        const totalQty =  this.state.totalQty + 1
        const totalPrice = this.state.totalPrice + items[item].mrf
        this.setState({items: items, totalQty: totalQty, totalPrice: totalPrice});
        
    }

    removeIndividualItemHandler = (item) => {
        if(!this.state.items[item].qty){
            return;
        }
        const items = {
            ...this.state.items,
            [item]:{
                ...this.state.items[item],
                qty: this.state.items[item].qty - 1
            }
        }
        const totalQty = this.state.totalQty - 1
        const totalPrice = this.state.totalPrice - items[item].mrf
        this.setState({items: items, totalQty: totalQty, totalPrice: totalPrice})
        const showQty = totalQty;
        const showPrice = totalPrice;
        this.setState({showQty: showQty, showPrice: showPrice})
    }

    addToCartButtonClickHandler = () => {
        const showQty = this.state.totalQty;
        const showPrice = this.state.totalPrice;
        this.setState({showQty: showQty, showPrice: showPrice, showDetails: true})
    }

    checkoutButtonHandler = () => {
        this.setState({showModal: true});
    }

    modalCloseHandler = () => {
        this.setState({showModal: false});
    }

    completeBuyHandler = () => {
        alert("Purchase was successful");
        this.setState({showModal: false});
        window.location.reload(false);
    }

    render(){
        return(
            <React.Fragment>
                <Modal show={this.state.showModal} modalClose={this.modalCloseHandler}>
                    <OrderSummary totalPrice={this.state.showPrice} clicked={this.completeBuyHandler} />
                </Modal>
                <div className='ShoppingList'>
                    <h1>Shopping Cart App</h1>
                    <ShoppingItems shoppingItems={this.state.items}
                    addIndItem={this.addIndividualItemHandler}
                    removeIndItem={this.removeIndividualItemHandler}
                    addCartClick={this.addToCartButtonClickHandler} />

                    <Footer qty={this.state.showQty} 
                    total={this.state.showPrice} 
                    show={this.state.showDetails}
                    checkoutClicked={this.checkoutButtonHandler}
                    disabled={!this.state.showQty} />
                </div>
            </React.Fragment>
        );
    };
};


export default SearchFeed;