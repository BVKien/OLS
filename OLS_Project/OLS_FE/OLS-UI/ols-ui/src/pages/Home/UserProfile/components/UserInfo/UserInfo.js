// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// components
import styles from './UserInfo.module.scss';
import Image from '~/components/Image';
import config from '~/config';
import { Link } from 'react-router-dom';

// api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const UserInfo = () => {
    // -- User --
    const [userDetails, setUserDetails] = useState('');
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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <h1 className={cx('user-info__title')}>Thông tin cá nhân</h1>
                <Image src={userDetails.image} className={cx('user-info__avatar')} />
                <h1 className={cx('user-info__full-name')}>{userDetails.fullName}</h1>
                <br />
                <div className={cx('user-info__update')}>
                    <Link to={config.routes.settings} className={cx('user-info__update__link')}>
                        Cập nhật
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
