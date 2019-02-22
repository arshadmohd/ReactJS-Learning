import { combineReducers } from 'redux';
import { currencyReducer } from './currency-reducer';
import { cartReducer } from './cart-reducer';

const rootReducer = combineReducers({
    code : currencyReducer,
    cart : cartReducer
});

export default rootReducer;