import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png';

const Header = ({ title }) => (
    <header className="header-app">
        <img className="header-app--logo" src={logo} alt="Logo" />
        { title }
    </header>
);

Header.propTypes = {
    title: PropTypes.string
};

export default Header;