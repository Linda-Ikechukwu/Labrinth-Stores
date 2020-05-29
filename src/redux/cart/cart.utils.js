export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.name === cartItemToAdd.name
    )

    if(existingCartItem){
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
           ? {...cartItem, quantity: cartItem.quantity + 1}
           : cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}