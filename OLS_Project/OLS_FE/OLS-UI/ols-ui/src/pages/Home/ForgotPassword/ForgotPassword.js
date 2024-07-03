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

const cx = classNames.bind(styles);

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [emailError, setEmailError] = useState('');
    const [verifyCodeError, setVerifyCodeError] = useState('');
    const [sendCodeSuccess, setSendCodeSuccess] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError('');
    };

    const handleVerifyCodeChange = (e) => {
        setVerifyCode(e.target.value);
        setVerifyCodeError('');
    };

    const handleSendCode = async () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email.');
            return;
        }

        try {
            const response = await axios.post('https://localhost:7158/api/User/forgotbyemail', { email });
            if (response.data && response.data.Message === 'Send Mail success !!') {
                setSendCodeSuccess(true);
            } else {
                setEmailError('Không thể gửi mã xác nhận. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error(error);
            setEmailError('Không thể gửi mã xác nhận. Vui lòng thử lại.');
        }
    };

    useEffect(() => {
        setSendCodeSuccess(false);
    }, [email]);

    const handleVerifyCode = async () => {
        if (!verifyCode && !validateEmail(email)) {
            setVerifyCodeError('Please enter the verification code.');
            setEmailError('Please enter a valid email.');
        } else if (!verifyCode) {
            setVerifyCodeError('Please enter the verification code.');
            setEmailError('');
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email.');
            setVerifyCodeError('');
        } else {
            try {
                // Gửi yêu cầu API để xác nhận mã xác nhận
                const response = await axios.post('https://localhost:7158/api/User/verifycode', {
                    email,
                    codeVerify: verifyCode,
                });
                if (response.data && response.data.Message === 'Mã xác thực hợp lệ') {
                    navigate(config.routes.resetpassword);
                } else {
                    setVerifyCodeError('Invalid verification code. Please try again.');
                }
            } catch (error) {
                console.error(error);
                setVerifyCodeError('Invalid verification code. Please try again.');
            }
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

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
                                        Email của bạn <span className={cx('forgot-password-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onBlur={() => validateEmail(email)}
                                        required
                                        className={cx('forgot-password-content__email-input', {
                                            'invalid-email': !isEmailValid,
                                        })}
                                    />
                                    {emailError && <div className={cx('error-message')}>{emailError}</div>}
                                </div>
                                <div className={cx('register-content__verify-email')}>
                                    <label className={cx('register-content__verify-email-title')}>
                                        Xác thực email <span className={cx('register-content__required')}>*</span>
                                    </label>
                                    <div className={cx('register-content__verify-email-input-wrap')}>
                                        <input
                                            type="number"
                                            placeholder="Mã xác thực"
                                            value={verifyCode}
                                            onChange={handleVerifyCodeChange}
                                            required
                                            className={cx('register-content__verify-email-input')}
                                        />
                                        <Button
                                            outline
                                            small
                                            className={cx('register-content__verify-email-button', {
                                                disabled: !validateEmail(email) || sendCodeSuccess,
                                            })}
                                            onClick={handleSendCode}
                                            disabled={!validateEmail(email) || sendCodeSuccess}
                                        >
                                            Gửi mã
                                        </Button>
                                    </div>
                                    {verifyCodeError && <div className={cx('error-message')}>{verifyCodeError}</div>}
                                </div>
                                <div className={cx('forgot-password-content__forgot-password')}>
                                    <Button
                                        large
                                        primary
                                        className={cx('forgot-password-content__forgot-password-button')}
                                        onClick={handleVerifyCode}
                                    >
                                        <span className={cx('forgot-password-content__forgot-password-button__title')}>
                                            Xác thực
                                        </span>
                                    </Button>
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
