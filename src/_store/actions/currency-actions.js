
//Currency Actions
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
const changeCurrency = (code) => {
    return {
        type: CHANGE_CURRENCY,
        code
    }
}

export { changeCurrency, CHANGE_CURRENCY };
