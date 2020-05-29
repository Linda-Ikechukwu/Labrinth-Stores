import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions'

import Button from '../button/button.component'

import './collection-item.styles.scss';


const CollectionItem = ({ item, addItemToCart }) => {
    const {name,price,imageUrl} = item;

    return (
        <div className='collection-item'>
            <div className='collection-item_image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-item_footer'>
                <span className='collection-item_name'>{name}</span>
                <span className='collection-item_price'>{price}</span>
            </div>
            <Button onClick={() => addItemToCart(item)} inverted>Add to Cart</Button>
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToprops)(CollectionItem);