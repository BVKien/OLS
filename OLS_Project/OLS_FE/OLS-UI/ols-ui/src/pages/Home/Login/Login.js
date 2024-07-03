// From react and libs
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Components
import styles from './Login.module.scss';
import Image from '~/components/Image';
import OLSLogo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import config from '~/config';
import { saveUserToLocalStorage } from '~/utils/auth';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Kiểm tra xem email và password có được nhập hay không
            if (!email || !password) {
                setEmailError(!email ? 'Please enter your email.' : '');
                setPassError(!password ? 'Please enter your password.' : '');
                return;
            } else {
                // Kiểm tra định dạng của email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    setEmailError('Please enter a valid email.');
                    return;
                }
            }
            const response = await axios.post('https://localhost:7158/api/User/loginbyemail', { email, password });

            if (response.data.message) {
                saveUserToLocalStorage(response.data.user, 3600);
                navigate('/');
            } else {
                setErrorMessage(response.data);
                setEmailError('');
                setPassError('');
            }
        } catch (error) {
            console.error('Error:', error);
            console.error('Error Response:', error.response);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('login-wrap')}>
                            <div className={cx('login-header')}>
                                <Image src={OLSLogo} className={cx('login-header__logo')} />
                                <span className={cx('login-header__title')}>Đăng nhập vào OLS</span>
                            </div>
                            <div className={cx('login-content')}>
                                <div className={cx('login-content__email')}>
                                    <label className={cx('login-content__email-title')}>
                                        Email <span className={cx('login-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={cx('login-content__email-input')}
                                    />
                                </div>
                                {emailError && (
                                    <div className={cx('error-message', 'error-message-email')}>{emailError}</div>
                                )}
                                <div className={cx('login-content__password')}>
                                    <label className={cx('login-content__password-title')}>
                                        Mật khẩu <span className={cx('login-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className={cx('login-content__password-input')}
                                    />
                                </div>
                                {passError && (
                                    <div className={cx('error-message', 'error-message-password')}>{passError}</div>
                                )}
                                {/* Xử lý logic ở đây */}
                                <div className={cx('login-content__forgot-password')}>
                                    <Link
                                        to={config.routes.forgotpassword}
                                        className={cx('login-content__forgot-password__title-link')}
                                    >
                                        Quên mật khẩu
                                    </Link>
                                </div>
                                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                                {/* Xử lý logic ở đây */}
                                <div className={cx('login-content__login')}>
                                    <Link to={'#'}>
                                        <Button
                                            large
                                            primary
                                            onClick={handleLogin}
                                            className={cx('login-content__login-button')}
                                        >
                                            <span className={cx('login-content__login-button__title')}>Đăng nhập</span>
                                        </Button>
                                    </Link>
                                </div>
                                <div className={cx('login-content__register')}>
                                    Chưa có tài khoản?
                                    <Link to={config.routes.register} className={cx('login-content__register-link')}>
                                        Đăng ký
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

export default Login;
