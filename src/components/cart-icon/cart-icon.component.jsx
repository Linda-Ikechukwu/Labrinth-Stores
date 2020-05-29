import React from 'react';
import { ReactComponent as CartSvg} from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';

import {toggleCartDropdown} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown}) => (
    <div className="cart" onClick={toggleCartDropdown}>
        <CartSvg className="cart__svg"></CartSvg>
        <span className='cart__items'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})



export default connect(null,mapDispatchToProps)(CartIcon);