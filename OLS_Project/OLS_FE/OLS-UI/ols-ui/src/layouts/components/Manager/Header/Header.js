// From react and libs
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faEllipsisVertical, faGear, faUser, faSignOut, faHome } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional - cho việc hiển thị tooltip
import Image from '~/components/Image';
import config from '~/config';

// customer api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const MENU_ITEMS = [];

const Header = () => {
    // -- User --
    const [userDetails, setUserDetails] = useState('');
    const currentUser = true; // Replace with actual authentication logic
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.userId : null;

    // Fetch user details by userId
    useEffect(() => {
        const fetchUserDetailsByUserId = async () => {
            try {
                const responseUser = await axios.get(customerApi.user.get_user_info + '/' + userId);
                setUserDetails(responseUser.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUserDetailsByUserId();
    }, [userId]);

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
            icon: <FontAwesomeIcon icon={faSignOut} />,
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
                            <span className={cx('welcome-admin')}>Xin chào {user.roleName}</span>
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
                            <Image className={cx('user-avatar')} src={userDetails.image} alt={userDetails.fullName} />
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
