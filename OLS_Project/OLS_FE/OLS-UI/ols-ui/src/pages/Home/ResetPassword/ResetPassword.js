// From react and libs
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Components
import styles from './ResetPassword.module.scss';
import Image from '~/components/Image';
import OLSLogo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const ResetPassword = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('reset-password-wrap')}>
                            <div className={cx('reset-password-header')}>
                                <Image src={OLSLogo} className={cx('reset-password-header__logo')} />
                                <span className={cx('reset-password-header__title')}>Reset password</span>
                            </div>
                            <div className={cx('reset-password-content')}>
                                <div className={cx('reset-password-content__new-password')}>
                                    <label className={cx('reset-password-content__new-password-title')}>
                                        New password <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your New Password"
                                        required
                                        className={cx('reset-password-content__new-password-input')}
                                    />
                                    <span className={cx('reset-password-content__new-password-hint')}>
                                        Hint: Password should at least 6 characters
                                    </span>
                                </div>
                                <div className={cx('reset-password-content__re-new-password')}>
                                    <label className={cx('reset-password-content__re-new-password-title')}>
                                        Re-new password
                                        <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your Re-New Password"
                                        required
                                        className={cx('reset-password-content__re-new-password-input')}
                                    />
                                </div>
                                {/* Xử lý logic ở đây */}
                                <div className={cx('reset-password-content__verify')}>
                                    <Link to={'#'}>
                                        <Button large primary className={cx('reset-password-content__verify-button')}>
                                            <span className={cx('reset-password-content__verify-button__title')}>
                                                Verify
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
