// From react and libs
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

// Components
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faEllipsisVertical, faGear, faUser, faSignOut, faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional - cho việc hiển thị tooltip
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [];

const Header = () => {
    // current User
    // User status -> if logged in or not
    const currentUser = true;
    //const currentUser = false;

    // handle menu change - handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // chandle change language
                break;
            default:
        }
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logout function called');
        localStorage.clear();
        navigate('/');
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            title: 'Về trang chủ',
            to: '/admin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/admin/settings',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.adminRoutes.dashboard} className={cx('logo-link')}>
                    <img src={images.logo} alt="OLS" />
                </Link>

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <span className={cx('welcome-admin')}>Xin chào Admin</span>
                        </>
                    ) : (
                        <>
                            {/* Register */}
                            <Button text to={config.routes.register}>
                                Register
                            </Button>

                            {/* Login */}
                            <Button primary to={config.routes.login}>
                                Login
                            </Button>
                        </>
                    )}

                    {/* menu - nút ... dọc*/}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96"
                                alt="Bui Van Kien"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                    <button className={cx('action-btn')} onClick={() => handleLogout()}>
                        <FontAwesomeIcon icon={faSignOut} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
