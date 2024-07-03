// libs
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// components and layouts
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MenuItems = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
};

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;

// {JSON.stringify(data)} test
