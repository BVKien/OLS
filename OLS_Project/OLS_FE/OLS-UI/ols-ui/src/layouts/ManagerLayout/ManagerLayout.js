// From react and libs
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import styles from './ManagerLayout.module.scss';
import Header from '~/layouts/components/Manager/Header';
import Footer from '~/layouts/components/Manager/Footer';
import { faBars, faGauge, faUsers, faBook, faBlog } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

// Nhận children từ App.js
const ManagerLayout = ({ children }) => {
    const [activeItem, setActiveItem] = useState(null);

    // Toggle
    const [clickCount, setClickCount] = useState(0);

    const handleToggleMenu = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <main className={cx('wrapper')}>
            <Header />

            <div className={cx('wrapper')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            {/* Sidebar */}
                            {/* Seperate quite complicate, still not have times to maximise it */}
                            {/* Tách Sidebar ra khá phức tạp, chưa có thời gian tối ưu */}
                            <div className={cx('side-bar-wrap')}>
                                <div className={cx('action-wrap')}>
                                    <div className={cx('action-menu')} onClick={handleToggleMenu}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                </div>
                                <nav
                                    className={cx('side-bar', {
                                        'menu-open': clickCount % 2 === 1,
                                        'menu-close': clickCount % 2 === 0,
                                    })}
                                >
                                    <ul className={cx('manager-list')}>
                                        <li className={cx('manager-item')}>
                                            <Link
                                                to={config.adminRoutes.dashboard}
                                                className={cx('manager-item__link')}
                                            >
                                                <FontAwesomeIcon icon={faGauge} className={cx('manager-item__icon')} />
                                                <span className={cx('manager-item__title')}>Điều khiển</span>
                                            </Link>
                                        </li>
                                        <li className={cx('manager-item')}>
                                            <Link
                                                to={config.adminRoutes.usermanager}
                                                className={cx('manager-item__link')}
                                            >
                                                <FontAwesomeIcon icon={faUsers} className={cx('manager-item__icon')} />
                                                <span className={cx('manager-item__title')}>Người dùng</span>
                                            </Link>
                                        </li>
                                        <li className={cx('manager-item')}>
                                            <Link
                                                to={config.adminRoutes.learningpathsmanager}
                                                className={cx('manager-item__link')}
                                            >
                                                <FontAwesomeIcon icon={faBook} className={cx('manager-item__icon')} />
                                                <span className={cx('manager-item__title')}>Lộ trình</span>
                                            </Link>
                                        </li>
                                        <li className={cx('manager-item')}>
                                            <Link
                                                to={config.adminRoutes.blogmanager}
                                                className={cx('manager-item__link')}
                                            >
                                                <FontAwesomeIcon icon={faBlog} className={cx('manager-item__icon')} />
                                                <span className={cx('manager-item__title')}>Bài viết</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <section className={cx('content', { 'menu-close': clickCount % 2 === 0 })}>
                                <div className={cx('container')}>
                                    <div className={cx('content')}>{children}</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

ManagerLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ManagerLayout;
