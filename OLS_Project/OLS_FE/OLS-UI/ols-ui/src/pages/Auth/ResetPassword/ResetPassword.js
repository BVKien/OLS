// // From react and libs
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import styles from './ResetPassword.module.scss';
import Image from '~/components/Image';
import OLSLogo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import config from '~/config';

// auth api
import authApi from '~/services/apis/authApi';

const cx = classNames.bind(styles);

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleVerifyCodeChange = (e) => {
        setVerifyCode(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setErrorMessage('Mật khẩu xác nhận không khớp.');
            return;
        }

        try {
            const response = await axios.put(authApi.auth.reset_password, {
                email,
                codeVerify: verifyCode,
                newPassword,
            });
            if (response.status === 200) {
                alert('Mật khẩu mới đã được cập nhật.');
                navigate(config.routes.login);
            } else {
                setErrorMessage('Không thể đặt lại mật khẩu. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Không thể đặt lại mật khẩu. Vui lòng thử lại.');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('reset-password-wrap')}>
                            <div className={cx('reset-password-header')}>
                                <Image src={OLSLogo} className={cx('reset-password-header__logo')} />
                                <span className={cx('reset-password-header__title')}>Đổi mật khẩu</span>
                            </div>
                            <div className={cx('reset-password-content')}>
                                <div className={cx('reset-password-content__new-password')}>
                                    <label className={cx('reset-password-content__new-password-title')}>
                                        Email của bạn <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                        className={cx('reset-password-content__new-password-input')}
                                    />
                                </div>
                                <div className={cx('reset-password-content__re-new-password')}>
                                    <label className={cx('reset-password-content__re-new-password-title')}>
                                        Mã xác thực
                                        <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Nhập mã xác thực"
                                        value={verifyCode}
                                        onChange={handleVerifyCodeChange}
                                        required
                                        className={cx('reset-password-content__re-new-password-input')}
                                    />
                                </div>
                                <div className={cx('reset-password-content__re-new-password')}>
                                    <label className={cx('reset-password-content__re-new-password-title')}>
                                        Nhập mật khẩu mới
                                        <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Nhập mật khẩu mới"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                        required
                                        className={cx('reset-password-content__re-new-password-input')}
                                    />
                                </div>
                                <div className={cx('reset-password-content__re-new-password')}>
                                    <label className={cx('reset-password-content__re-new-password-title')}>
                                        Xác nhận mật khẩu mới
                                        <span className={cx('reset-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        required
                                        className={cx('reset-password-content__re-new-password-input')}
                                    />
                                    <span className={cx('reset-password-content__new-password-hint')}>
                                        Gợi ý: Mật khẩu có độ dài ít nhất là 6 ký tự
                                    </span>
                                </div>

                                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}

                                {/* Xử lý logic ở đây */}
                                <div className={cx('reset-password-content__verify')}>
                                    <Button
                                        onClick={handleResetPassword}
                                        large
                                        primary
                                        className={cx('reset-password-content__verify-button')}
                                    >
                                        <span className={cx('reset-password-content__verify-button__title')}>
                                            Xác nhận
                                        </span>
                                    </Button>
                                </div>
                                <div className={cx('reset-password-content__login')}>
                                    Quay về
                                    <Link to={config.routes.login} className={cx('reset-password-content__login-link')}>
                                        Đăng nhập
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
