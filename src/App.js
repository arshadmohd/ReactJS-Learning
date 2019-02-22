import React, { Component } from 'react';
import './App.css';
import ProductList from './containers/productlist';
import Currency from './components/currency';
import Cart from './containers/cart';
import Product from './components/product';
import ErrorBoundary from './components/error-boundary';
import InputForm from './components/form';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Demo from './demo';
import ErrorPage from './components/error-page';

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

      <Router>
        <div>
          <Currency onCode={(code)=> this.setState({currencyCode : code})}></Currency>
          <nav>
            <Link to = "/" >Home</Link>
            <Link to = "/products">Products</Link>
            <Link to = "/cart">Cart</Link>
          </nav>
          <Switch>
              <Route exact path = "/" component = {Demo}></Route>
              <Route path="/products" component = {ProductList}></Route>
              <Route path = "/cart" component = {Cart}></Route>
              <Route path = "/forms/:id" component = {InputForm}></Route>
              <Route component = {ErrorPage}></Route>
          </Switch>
        </div>
      </Router>
     /*<ErrorBoundary>   

        <div className="App">
        <InputForm></InputForm>
        <Currency onCode={(code)=> this.setState({currencyCode : code})}></Currency>
        <ProductList currencyCode = {this.state.currencyCode}
        onAddItem = { prod => this.addItemToCart(prod)}></ProductList>
        <Cart cartItems={this.state.cartItems}></Cart>
      </div>
     </ErrorBoundary>*/
    );
  }
}

export default App;
