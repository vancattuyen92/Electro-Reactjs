import * as cartActions from '../actions/cartActions'

const initialState = {
    // currentVal: 0,
    currentProduct: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActions.ADD_CART: {
            return {
                ...state,
                currentVal: action.payload,
                currentProduct: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducer