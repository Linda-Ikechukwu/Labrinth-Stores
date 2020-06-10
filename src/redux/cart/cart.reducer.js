import {addItemToCartUtil,removeItemFromCartUtil } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
       case 'TOGGLE_CART_DROPDOWN' :
           return {
               ...state,
               hidden: !state.hidden
           };

        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cartItems: addItemToCartUtil(state.cartItems, action.payload)
            };
        case 'REMOVE_ITEM_FROM_CART':
            return{
                ...state,
                cartItems: removeItemFromCartUtil(state.cartItems, action.payload)
            };
        case 'CLEAR_ITEM_FROM_CART':
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.name !== action.payload.name)
            }
        default:
            return state;
    }
};

export default cartReducer;