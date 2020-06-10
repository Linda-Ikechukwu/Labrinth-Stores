import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout__header">
            <div className="checkout__header__block">
               <span>Product</span>
            </div>
            <div className="checkout__header__block">
               <span>Description</span>
            </div>
            <div className="checkout__header__block">
                <span>Quantity</span>
            </div>
            <div className="checkout__header__block">
               <span>Price</span>
            </div>
            <div className="checkout__header__block">
               <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem,index) => {
               return <CheckoutItem key={index} cartItem={cartItem} />
            })
        }
        <div className="checkout__total">
            <span>Total : ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CheckoutPage));