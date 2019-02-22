
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const addProductToCart = (pData) =>{
   return {
    type : 'ADD_TO_CART',
    pData 
   }
}

const removeFromCart = (id) => ({
    type : REMOVE_FROM_CART,
    id
})

export { addProductToCart, ADD_TO_CART, REMOVE_FROM_CART} ;