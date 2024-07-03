// libs
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// componenets
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ children }) => {
    return <nav>{children}</nav>;
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
