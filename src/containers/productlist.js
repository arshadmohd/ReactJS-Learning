import React from 'react';
import Product from '../components/product';
import { getProducts } from '../services/product-service';
import { connect } from 'react-redux';

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
        const {pList, onAddItem } = this.state;
        const {history} = this.props;
        return(
            <div>
               {
                    pList.map((prod)=><Product pData = {prod} key={prod.productId} currencyCode = {this.props.currencyCode} onAddItem = {(pr) => history.push('/cart')}></Product>)
               }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currencyCode : state
})
export default connect(mapStateToProps)(ProductList);