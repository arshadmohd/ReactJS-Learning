import React from 'react';
import CartItem from '../components/cart-item';

class Cart extends React.Component{
    render(){

        const {cartItems} = this.props;
        return(
            <table>
                <tbody>
                <tr><td><b>Your Cart</b></td></tr>
                <tr>
                    <td>
                        {
                            cartItems.map(
                                item => <CartItem item = {item} key = {item.productId}></CartItem>
                            )
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Cart;