// From react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

// Components
import styles from './Settings.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

// api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const Settings = () => {
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
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('settings__side-bar')}>
                            <h1 className={cx('settings__side-bar__heading')}>Cài đặt</h1>
                            <div className={cx('settings__select')}>
                                <div className={cx('settings__option', 'selected')}>
                                    {/* Link - ul li */}
                                    <Link href="#" className={cx('settings__option-item')}>
                                        <FontAwesomeIcon icon={faUser} className={cx('settings__option-item-icon')} />
                                        <span className={cx('settings__option-item-title')}>Tài khoản</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-9')}>
                        <div className={cx('settings__content')}>
                            <h1 className={cx('settings__content-heading')}>Tài khoản</h1>
                            <div className={cx('settings__user-info')}>
                                <div className={cx('user-info__avatar-wrap')}>
                                    {/* Select image from file when click to image */}
                                    <Image src={userDetails.image} alt="avatar" className={cx('user-info__avatar')} />
                                </div>
                                <div className={cx('user-info__name-wrap')}>
                                    <p className={cx('user-info__title')}>Họ và tên</p>
                                    <input
                                        type="text"
                                        value={userDetails.fullName}
                                        className={cx('user-info__name-input')}
                                    />
                                </div>
                                <div className={cx('user-info__email-wrap')}>
                                    <p className={cx('user-info__title')}>Email</p>
                                    <input
                                        type="text"
                                        value={userDetails.email}
                                        className={cx('user-info__email-input')}
                                    />
                                </div>
                                <div className={cx('user-info__phone-wrap')}>
                                    <p className={cx('user-info__title')}>Số điện thoại</p>
                                    <input
                                        type="text"
                                        value={userDetails.phone}
                                        className={cx('user-info__phone-input')}
                                    />
                                </div>
                                <div className={cx('user-info__password-wrap')}>
                                    <p className={cx('user-info__title')}>Mật khẩu</p>
                                    <input
                                        type="password"
                                        value={userDetails.password}
                                        className={cx('user-info__password-input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('settings-save')}>
                                <Button outline small className={cx('settings-save__btn')}>
                                    Lưu
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Settings;
