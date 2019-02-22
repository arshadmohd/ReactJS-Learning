import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './containers/productlist';
import Currency from './components/currency';
import Cart from './containers/cart';
import Product from './components/product';
import ErrorBoundary from './components/error-boundary';
import InputForm from './components/form';

class App extends Component {
  
  state = { currencyCode : 'INR', cartItems: []};
  addItemToCart(p){
    let iteminCart = false;
    console.log("This is App:: Click happened ",p);
    const items = this.state.cartItems;
   
    items.push(p);
    this.setState({cartItems: items})
  }
  render() {
    return (
     <ErrorBoundary>   

        <div className="App">
        <InputForm></InputForm>
        <Currency onCode={(code)=> this.setState({currencyCode : code})}></Currency>
        <ProductList currencyCode = {this.state.currencyCode}
        onAddItem = { prod => this.addItemToCart(prod)}></ProductList>
        <Cart cartItems={this.state.cartItems}></Cart>
      </div>
     </ErrorBoundary>
    );
  }
}

export default App;
