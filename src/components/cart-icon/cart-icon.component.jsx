import React from 'react';
import { ReactComponent as CartSvg} from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';

import {toggleCartDropdown} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    <div className="cart" onClick={toggleCartDropdown}>
        <CartSvg className="cart__svg"></CartSvg>
        <span className='cart__items'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = ({ cart: {cartItems} }) => ({
    itemCount: cartItems.reduce((sumQuantity, cartItem) => sumQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);