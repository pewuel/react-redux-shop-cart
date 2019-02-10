import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ text }) => (
    <footer className="footer">
        { text }
    </footer>
);

Footer.propTypes = {
    text: PropTypes.string
};

export default Footer;