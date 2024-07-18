import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
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
    const currentUser = true; // Replace with actual authentication logic

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logout function called');
        localStorage.clear();
        navigate('/login');
    };

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
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
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        // {
        //     icon: <FontAwesomeIcon icon={faSignOut} />,
        //     title: 'Đăng xuất',
        //     separate: true,
        // },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="OLS" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to={config.routes.register}>
                                Register
                            </Button>

                            <Button primary to={config.routes.login}>
                                Login
                            </Button>
                        </>
                    )}

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
