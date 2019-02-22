import React from 'react';

class CartItem extends React.Component{
    
    state = {qty:1};
    render(){
        const {item} =  this.props;
        const {qty} = this.state;
        return(
            <div className="cart-item">
                <span><img src={item.productImage} width='100'></img></span>
                <span>
                    <p>Cost: {item.productPrice}</p>
                    <p>Quantity: 
                       <input type = "number" 
                       value={qty}
                       onChange={(e) => this.setState({qty: e.currentTarget.valueAsNumber})}>
                       </input>

                    </p>
                    <p>Total Price: {item.productPrice * qty}</p>
                </span>
            </div>
        );
    }
}

export default CartItem;