import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from '../reducers/cartReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers =  combineReducers({
    // totalAmount: cartReducer,
    totalProduct: cartReducer,
})

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store
  