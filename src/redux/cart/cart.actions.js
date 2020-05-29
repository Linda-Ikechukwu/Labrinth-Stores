export const toggleCartDropdown = () => ({
    type: 'TOGGLE_CART_DROPDOWN',
});

export const addItemToCart = item => ({
    type: 'ADD_ITEM_TO_CART',
    payload: item
})