import React from 'react';
import {connect} from 'react-redux';

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component' 

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) =>(
    <div className="cart-dropdown">
       <div className="cart-dropdown__items">
           {
               cartItems.map((cartItem, index) => (
                   <CartItem key={index} item={cartItem}/>
               ))
           }
       </div>
         
       <Button>checkout</Button>
    </div>
)

const mapStatetoProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStatetoProps)(CartDropdown);