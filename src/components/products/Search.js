import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchProducts } from '../../store/products/actionCreators';

const Search = ({ search }) => (
    <div className="search">
        <input className="search-input" placeholder="Szukaj..." onChange={ev => search(ev.target.value)} />
    </div>
);

Search.propTypes = {
    search: PropTypes.func.isRequired
};

export default connect(
    null,
    {
        search: searchProducts
    }
)(Search);