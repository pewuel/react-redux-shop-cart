import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../store/cart/actionCreators';

const ProductListItem = ({ id, name, description, photo, price, in_stock, addToCart }) => {

    return (
        <li className="product-box">
            <div>
                <img className="product-box--image" src={photo} alt={name} />
            </div>
            <div>
                <h2>{ name }</h2>
                <pre>Cena: {price} zł</pre>
                <p>{description}</p>
                <button disabled={!in_stock} onClick={() => addToCart(id)}>Dodaj do koszyka</button>
            </div>
        </li>
    )

};

ProductListItem.propTypes = {
    addToCart: PropTypes.func.isRequired
};

export default connect(
    null,
    {
        addToCart: addToCart
    }
)(ProductListItem);