// libs
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom'; // link nội bộ, nav link có thể xử lý active, nav link sinh ra thẻ <a> nên ko cách dòng

// components
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ title, to, icon, activeIcon }) => {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            {/* node -> có thể render được  */}
            {/* <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>  */}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    // isRequired
    icon: PropTypes.node,
    // isRequired
    activeIcon: PropTypes.node,
};

export default MenuItem;
