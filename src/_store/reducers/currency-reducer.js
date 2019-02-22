import { CONFIG } from "../../config";
import { CHANGE_CURRENCY } from "../actions/currency-actions";

const currencyReducer = (state = CONFIG.CURRENCY_CODE, action) => {
    switch(action.type){
        case CHANGE_CURRENCY : return action.code;
        default: return state;       
    }
}

export {currencyReducer};