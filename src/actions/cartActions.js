export const ADD_CART = 'CART/ADD_CART'

export const setCart = function ( newCart ) {
    return {
        type: ADD_CART,
        payload: newCart,
    }
}