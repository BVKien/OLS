// From react and libs
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Components
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional - cho việc hiển thị tooltip
import { UploadIcon, NotificationIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Default/Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'ev',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'learningpaths',
        to: '/learningpaths',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'longtesttesttesttest',
    },
];

const Header = () => {
    // current User
    // User status -> if logged in or not
    const currentUser = true;
    //const currentUser = false;

    // handle menu change - handle logic
    const handleMenuChange = (menuItem) => {
        // check console log menu item -> language level 2
        //console.log(menuItem);

        switch (menuItem.type) {
            case 'language':
                // chandle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang cá nhân',
            to: '/user-profile',
        },
        // {
        //     icon: <FontAwesomeIcon icon={faCoins} />,
        //     title: 'Get coins',
        //     to: '/coins',
        // },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        // ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/login',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="OLS" />
                </Link>

                {/* Search */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* tool tip */}
                            {/* <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy> */}

                            <Tippy content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon />
                                </button>
                            </Tippy>
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
                                //fallback="https://gaslampfoundation.org/wp-content/uploads/Copy-of-Yellow-and-Brown-Neutral-Fall-Festival-Event-Poster-1-768x1024.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
