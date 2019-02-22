import React from 'react';
import Product from '../components/product';
import { getProducts } from '../services/product-service';

class ProductList extends React.Component{
    
    state = {pList:[]};
    componentDidMount() {
        getProducts().then(
            data => {
                console.log('success', data);
                this.setState({pList:data});
            }
        ).catch(
            err => console.log('error',err)
        )
    }

    render(){        
        const {pList, onAddItem} = this.state;
        return(
            <div>
               {
                    pList.map((prod)=><Product pData = {prod} key={prod.productId} currencyCode = {this.props.currencyCode} onAddItem = {(pr) => this.props.onAddItem(pr)}></Product>)
               }
            </div>
        );
    }
}

export default ProductList;