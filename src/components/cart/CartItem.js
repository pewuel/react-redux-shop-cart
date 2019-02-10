import React from 'react';
import PropTypes from 'prop-types';


const CartItem = ({ id, quantity, name, price, remove }) => (
    <>
        <button onClick={() => remove(id)}>x</button>
        {quantity}x - {name} - {price} zł
    </>
);

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired
};

export default CartItem;