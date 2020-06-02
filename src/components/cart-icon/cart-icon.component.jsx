import React from 'react';
import { ReactComponent as CartSvg} from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';

import {toggleCartDropdown} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

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

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);