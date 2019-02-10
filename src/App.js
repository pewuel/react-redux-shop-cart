import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ProductList from './components/products/ProductList';
import Cart from './components/cart/Cart';
import Footer from './components/Footer';
import store from './store/store';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header title="My-shop application" />
        <div className="container">
          <ProductList />
          <Cart />
        </div>
        <Footer text="Copyright by my-shop - 2018" />
      </Provider>
    );
  }
}

export default App;
