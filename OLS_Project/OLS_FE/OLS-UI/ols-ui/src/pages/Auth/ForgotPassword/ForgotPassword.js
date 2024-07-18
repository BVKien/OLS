// From react and libs
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import styles from './ForgotPassword.module.scss';
import Image from '~/components/Image';
import OLSLogo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import config from '~/config';

// customer api
import authApi from '~/services/apis/authApi';

const cx = classNames.bind(styles);

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [sendCodeSuccess, setSendCodeSuccess] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError('');
    };

    const handleSendCode = async () => {
        if (email === '') {
            setEmailError('Vui lòng nhập email của bạn.');
            return;
        }

        try {
            const response = await axios.post(authApi.auth.send_verification_code, { email });
            if (response.status === 200) {
                alert('Hệ thống đã gửi mã xác thực đến email của bạn, vui lòng kiếm tra.');
                setSendCodeSuccess(true);
                navigate(config.routes.resetpassword);
            } else {
                setEmailError('Không thể gửi mã xác thực, vui lòng kiểm tra lại email của bạn.');
            }
        } catch (error) {
            console.error(error);
            setEmailError('Không thể gửi mã xác thực, vui lòng kiểm tra lại email của bạn.');
        }
    };

    useEffect(() => {
        setSendCodeSuccess(false);
    }, [email]);

    // const validateEmail = (email) => {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // };

    useEffect(() => {
        if (sendCodeSuccess) {
        }
    }, [sendCodeSuccess]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('forgot-password-wrap')}>
                            <div className={cx('forgot-password-header')}>
                                <Image src={OLSLogo} className={cx('forgot-password-header__logo')} />
                                <span className={cx('forgot-password-header__title')}>Quên mật khẩu</span>
                            </div>
                            <div className={cx('forgot-password-content')}>
                                <div className={cx('forgot-password-content__email')}>
                                    <label className={cx('forgot-password-content__email-title')}>
                                        Nhập Email xác thực{' '}
                                        <span className={cx('forgot-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        // onBlur={() => validateEmail(email)}
                                        required
                                        className={cx('forgot-password-content__email-input', {
                                            'invalid-email': !isEmailValid,
                                        })}
                                    />
                                    {emailError && <div className={cx('error-message')}>{emailError}</div>}
                                </div>
                                <div className={cx('forgot-password-content__forgot-password')}>
                                    <Button
                                        large
                                        primary
                                        className={cx('forgot-password-content__forgot-password-button')}
                                        onClick={handleSendCode}
                                    >
                                        <span className={cx('forgot-password-content__forgot-password-button__title')}>
                                            Gửi mã xác thực
                                        </span>
                                    </Button>
                                </div>
                                <div className={cx('forgot-password-content__login')}>
                                    Quay về
                                    <Link
                                        to={config.routes.login}
                                        className={cx('forgot-password-content__login-link')}
                                    >
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

export default ForgotPassword;
