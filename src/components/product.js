import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './error-boundary';
import FallbackImage from './fallback-image';

class Product extends React.Component{
    render(){
        const {pData, currencyCode, onAddItem} = this.props;
        return (
            
                <div className="product">

                    <table>
                        <tbody>
                        <tr>
                            <td><FallbackImage src={pData.productImage}></FallbackImage></td>
                            <td className="product-details">
                                <p><strong>{pData.productName}</strong></p>
                                <p>{currencyCode} {pData.productPrice}</p>
                                <p>{pData.productStock ? <button 
                                onClick={ e => onAddItem(pData)}>Add to cart</button> : "Not in Stock"}</p>
                            </td>
                        </tr>
                        </tbody>
                        
                    </table>     
                    </div>
            
        );
    }
}

Product.propTypes={
    pData:PropTypes.object.isRequired,
    currencyCode:PropTypes.string,
    onAddItem:PropTypes.func
}
export default Product;