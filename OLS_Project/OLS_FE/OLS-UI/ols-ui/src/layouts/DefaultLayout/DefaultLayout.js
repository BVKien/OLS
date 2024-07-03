// From react and libs
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// Components
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Default/Header';
import Navbar from '~/layouts/components/Default/Navbar';
import Footer from '~/layouts/components/Default/Footer';

const cx = classNames.bind(styles);

// Nhận children từ App.js
const DefaultLayout = ({ children }) => {
    return (
        <main className={cx('wrapper')}>
            <Header />
            <Navbar />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {/* <h1>back</h1> */}
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
