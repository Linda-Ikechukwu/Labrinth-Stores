import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <div className='checkout-item'>
        <div className='item__image'>
          <img src={imageUrl} alt='item' />
        </div>
        <span className='item__name'>{name}</span>
        <span className='item__quantity'>
            <div className="item__quantity__arrow" onClick={() => removeItem(cartItem)}>&#10094; </div>
            <span class="item__quantity__value">{quantity}</span>
            <div className="item__quantity__arrow" onClick={() => addItem(cartItem)}>&#10095; </div>
        </span>
        <span className='item__price'>{price}</span>
        <div className='item__remove-button' onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </div>
    );
  };
  
  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),

  });
  
  export default connect(
    null, mapDispatchToProps
  )(CheckoutItem);