import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { getProductsInCart, getTotalPrice } from '../../store/cart/selectors';
import { removeFromCart } from '../../store/cart/actionCreators';

const Cart = ({ products, total, removeFromCart }) => (
    <section className="user-cart">
        <h4>Twój koszyk</h4>

        { products.length > 0
            ?
                <>
                    <ul className="user-cart--list">
                        { products.map(item => (
                            <li key={item.id}>
                                <CartItem {...item} remove={removeFromCart} />
                            </li>
                        ))}
                    </ul>
                    <section className="total-price">Podsumowanie: {total} zł</section>
                </>
            :
                <p>Brak produktów w koszyku</p>

        }
    </section>
);


Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
  })),
  total: PropTypes.number.isRequired
};


Cart.defaultProps = {
  products: [],
  total: 0
};

const mapStateToProps = state => ({
    products: getProductsInCart(state),
    total: getTotalPrice(state)
});

export default connect(
    mapStateToProps,
    {
        removeFromCart: removeFromCart
    }
)(Cart);