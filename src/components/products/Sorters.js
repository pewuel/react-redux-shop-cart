import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import config from '../../config/config';
import SortersItem from './SortersItem';
import { sortByChange, orderByChange } from '../../store/products/actionCreators';

const sortByValues = config.products.SORTERS;
const orderByValues = config.products.ORDER_BY;

const Sorters = ({ changeSortByValue, changeOrderByValue }) => (
    <ul className="sorters">
        <li className="sorters--item">
            <SortersItem
                options={sortByValues}
                defaultValue={sortByValues.find(item => item.default).value}
                onChange={changeSortByValue}
            />
        </li>
        <li className="sorters--item">
            <SortersItem
                options={orderByValues}
                defaultValue={orderByValues.find(item => item.default).value}
                onChange={changeOrderByValue}
            />
        </li>
    </ul>
);

Sorters.propTypes = {
    changeSortByValue: PropTypes.func.isRequired,
    changeOrderByValue: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        changeSortByValue: sortByChange,
        changeOrderByValue: orderByChange
    }
)(Sorters);