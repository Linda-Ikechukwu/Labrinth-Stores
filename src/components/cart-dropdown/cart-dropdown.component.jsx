import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component' 

import { selectCartItems } from "../../redux/cart/cart.selector";

import {toggleCartDropdown} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history,dispatch}) =>(
    <div className="cart-dropdown">
       <div className="cart-dropdown__items">
           {
               cartItems.length ? (
                  cartItems.map((cartItem, index) => (
                    <CartItem key={index} item={cartItem}/>
                  ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
           }
       </div>
         
       <Button onClick={()=>{
           history.push('/checkout');
           dispatch(toggleCartDropdown()) 
       }}>
           checkout
        </Button>
    </div>
)

const mapStatetoProps = (state) => ({
    cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));