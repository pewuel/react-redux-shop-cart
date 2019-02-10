import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './Search';
import Sorters from './Sorters';
import ProductListItem from './ProductListItem';
import Loader from '../Loader';
import { fetchProducts } from '../../store/products/actionCreators';
import { getMatchedProducts, getLoadedStatus } from '../../store/products/selectors';


class ProductList extends Component {

    componentDidMount() {

        const { getProducts } = this.props;

        getProducts();
    }


    render() {

        const { loaded, products } = this.props;

        return (
            <section className="product-list">
                <div className="product-list--top">
                    <Search />
                    <Sorters />
                </div>

                <div className="product-boxes-container">
                    { loaded
                        ?
                            products.length > 0
                                ?
                                    <ul className="product-boxes">
                                        {products.map(item => (
                                            <ProductListItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))}
                                    </ul>
                                :
                                    <p>Brak produktów.</p>

                        :
                            <Loader />
                    }
                </div>
            </section>
        )
    }
}


ProductList.defaultProps = {
    loaded: false,
    products: []
};

ProductList.propTypes = {
    loaded: PropTypes.bool,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        in_stock: PropTypes.bool.isRequired
    })),
    getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loaded: getLoadedStatus(state),
    products: getMatchedProducts(state)
});


export default connect(
    mapStateToProps,
    {
        getProducts: fetchProducts
    }
)(ProductList);
