import React from 'react';
import CartItem from '../components/cart-item';
import { connect } from 'react-redux';

class Cart extends React.Component{
    render(){

        const {cartItems} = this.props;
        if(!cartItems || cartItems.length <= 0){
            return <p> Nothing in the cart.</p>
        }

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


const mapStateToProps = (state) => ({
    cartItems : state.cart
})
export default connect(mapStateToProps)(Cart);