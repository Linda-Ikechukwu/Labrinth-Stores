import React from 'react';
import Button from '../button/button.component'

import './cart-dropdown.styles.scss';

const CartDropdown = () =>(
    <div className="cart-dropdown">
       <div className="cart-dropdown__items" />
       <Button>checkout</Button>
    </div>
)

export default CartDropdown;