import React from 'react';
import PropTypes from 'prop-types';


const SortersItem = ({ options, defaultValue, onChange }) => (
    <select
        defaultValue={defaultValue}
        onChange={ev => onChange(ev.target.value)}
    >
        { options.map(option => (
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
);

SortersItem.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })),
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SortersItem;