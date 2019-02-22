import {createStore} from 'redux';
import { currencyReducer } from './reducers/currency-reducer';

const store = createStore(currencyReducer);
export default store;