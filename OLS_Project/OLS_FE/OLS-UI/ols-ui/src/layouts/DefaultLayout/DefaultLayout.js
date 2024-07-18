import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// Components
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Default/Header';
import Navbar from '~/layouts/components/Default/Navbar';
import Footer from '~/layouts/components/Default/Footer';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children, useDefaultLayout = true }) => {
    return (
        <main className={cx('wrapper')}>
            {useDefaultLayout && <Header />}
            {useDefaultLayout && <Navbar />}
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            {useDefaultLayout && <Footer />}
        </main>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    useDefaultLayout: PropTypes.bool,
};

export default DefaultLayout;
