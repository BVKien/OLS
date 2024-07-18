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
import { useAuth } from '~/pages/Auth/AuthContext';

// auth api
import authApi from '~/services/apis/authApi';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            // Validate email and password
            if (!email || !password) {
                setEmailError(!email ? 'Vui lòng nhập email của bạn.' : '');
                setPassError(!password ? 'Vui lòng nhập mật khẩu của bạn.' : '');
                return;
            } else {
                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    setEmailError('Vui lòng nhập đúng email của bạn.');
                    return;
                }
            }

            const response = await axios.post(authApi.auth.login, { email, password });
            console.log('API Response:', response.data); // Debug log

            if (response.data.token && response.data.user) {
                const userData = response.data.user;
                login(userData); // Use login function from context
                const userRole = userData.roleName;

                console.log('User Role:', userRole); // Debug log

                // Redirect based on user role
                if (userRole === 'Customer') {
                    navigate('/'); // Redirect to homepage
                } else if (userRole === 'Admin') {
                    navigate('/admin'); // Redirect to admin page
                } else {
                    setErrorMessage('Unauthorized role.');
                }
            } else {
                setErrorMessage('Login failed. Please try again.');
                setEmailError('');
                setPassError('');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
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
                                <div className={cx('login-content__forgot-password')}>
                                    <Link
                                        to={config.routes.forgotpassword}
                                        className={cx('login-content__forgot-password__title-link')}
                                    >
                                        Quên mật khẩu
                                    </Link>
                                </div>
                                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                                <div className={cx('login-content__login')}>
                                    <Button
                                        large
                                        primary
                                        onClick={handleLogin}
                                        className={cx('login-content__login-button')}
                                    >
                                        <span className={cx('login-content__login-button__title')}>Đăng nhập</span>
                                    </Button>
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
